const { getPublicKey, decryptData } = require("../utils/encryption");
const { restEncryption, restDecryption } = require("../utils/encryptionAtRest");
const { validationResult } = require('express-validator')
const firebaseAdmin = require('../utils/firebase');
const authModel = require('../models/authModel');


const sendPublicKey = (req, res) => {
    res.json({ publicKey: getPublicKey() });
};

// Used as middleware to protect against cross-site request forgery
const prepCSRF = (req, res, next) => {
    const csrfToken = req.csrfToken();
    res.cookie('csrfToken', csrfToken, {
        httpOnly: false, //allows me access on the client side
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
    });
    next();
}

const decryptLoginData = (req, res, next) => {
    req.body.action = "login"; // used to check user action later
    try {
        // Deconstruct incoming data
        const { uid: encryptedUID } = req.body;
        // Decrypt incoming data
        const uid = decryptData(encryptedUID);
        // Prepare body for incoming data validation
        req.body.uid = uid;
        
    } catch (error) {
        req.body.error = {error : "There was an error logging in." };
        console.log("Oh dear, there was an error:", error);
    }
    next();
};

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


const decryptRegistrationData = (req, res, next) => {
    req.body.action = "registration"; // Used to check the user action later.
    try {
        // Deconstruct incoming data
        const { fullname: encryptedFullname,
                username: encryptedUsername, 
                uid: encryptedUID,
            } = req.body;
        // Decrypt incoming data
        const fullname = decryptData(encryptedFullname);
        const username = decryptData(encryptedUsername);
        const uid = decryptData(encryptedUID);
        console.log("full name is:", fullname);
        console.log("username is: ", username);
        console.log("userid is:", uid);
        // Set body ready for validation
        req.body.fullname = fullname;
        req.body.username = username;
        req.body.uid = uid;

    } catch (error) {
        req.body.error = { error: "There was an error registering" };
        console.log("Holy moly Batman, there was an error:", error);
    }
    next();
};

const encryptUserForDatabase = async (req, res, next) => {
    req.body.fullnameEncrypted = restEncryption(req.body.fullname, process.env.REST_ENCRYPTION_KEY);
    req.body.usernameEncrypted = restEncryption(req.body.username, process.env.REST_ENCRYPTION_KEY);
    next();
}

const insertNewUser = async (req, res, next) => {
    req.body.role = 'learner'; // This is set here because it can be sent back to the front end later.
    const userData = {
        username: req.body.fullnameEncrypted,
        fullname: req.body.usernameEncrypted,
        uid: req.body.uid,
        role: 'learner'
    };

    try {
        const auth = new authModel(); // set up an authorization object with the role of admin
        auth.addUser(userData);
    } catch (error) {
        console.error("Oh dear, something went wrong inserting someone in the database!", error);
    }
    next();
}

// Call this function if there is an error after inserting a new user
const removeNewUser = async (req, res, next) => {
    try {
        const auth = new authModel(); // only an admin user can remove data from the database
        auth.removeUser(req.body.uid);
    } catch (error) {
        console.error("Oopsie, something went wrong removing someone from the database!", error);
    }
}

// Call this function to get the user from the database
const getUserByUID = async (req, res, next) => {
    try {
        console.log("UID IS:", req.body.uid);
        const auth = new authModel(); // the user can get their own information
        const userInfo = await auth.getUserByUID(req.body.uid);
        req.body.username = userInfo[0].username;
        req.body.role = userInfo[0].role;
        next();
    } catch (error) {
        console.error("Oh dear, something has gone wrong getting you from the database:", error);
    }
}

const decryptUserForFrontend = (req, res, next) => {
    req.body.username = restDecryption(req.body.username, process.env.REST_ENCRYPTION_KEY);
    next();
}

// This is used for both registration and login as the final step
const authenticateSessionWithFirebase = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        // Generate a session cookie to expire in 5 days
        const sessionCookie = await firebaseAdmin.auth().createSessionCookie(token, { expiresIn: 60 * 60 * 24 * 5 * 1000});

        res.cookie("session", sessionCookie, {
            maxAge: 60 * 60 * 24 * 5 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
        });

        res.status(200).json({ message: "Registration was successful!", username: req.body.username, role: req.body.role, uid: req.body.uid });

    } catch (error) {
        // Something went wrong verifying the cookie
        // Will need to call another function to remove the user from my database
        // because at this point the new user has been added to my database.
        // We need to tell the user to try registering again.
        if (req.body.action === "login") {
            removeNewUser();
        }
        
        console.log("Oh dear, something went wrong:", error);
    }
};

const verifySessionCookie = async (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    console.log("Verifying session cookie...");
    try {
        const decodedClaims = await firebaseAdmin.auth().verifySessionCookie(sessionCookie, true);
        req.user = decodedClaims;
        next();
    } catch (error) {
        res.clearCookie("session"); // Clear cookie if verification fails
        return res.status(401).json({ message: "unauthorized" });
    }
};

const logout = async (req, res) => {
    try {
        console.log("Clearing cookie");
        res.clearCookie('session');
        await firebaseAdmin.auth().revokeRefreshTokens(req.user.sub);
        res.status(200).json({ message: "logged out!" });
    } catch (error) {
        return res.status(401).json({ message: "unauthorized" });
    }
    
};

module.exports = { 
    sendPublicKey,
    prepCSRF,
    decryptLoginData,
    checkValidationErrors,
    decryptRegistrationData,
    encryptUserForDatabase,
    insertNewUser,
    getUserByUID,
    decryptUserForFrontend,
    authenticateSessionWithFirebase,
    verifySessionCookie,
    logout
};
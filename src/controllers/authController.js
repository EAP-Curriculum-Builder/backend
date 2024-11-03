const { getPublicKey, decryptData } = require("../utils/encryption");
const { validationResult } = require('express-validator')
const firebaseAdmin = require('../utils/firebase');


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

const authenticateLoginData = (req, res, next) => {
    console.log("I will authenticate login data with firebase!");
    next();
};

const decryptRegistrationData = (req, res, next) => {
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

const authenticateSessionWithFirebase = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        
        // save user data to my database here
        // If all goes well then generate a session cookie to expire in 5 days
        const sessionCookie = await firebaseAdmin.auth().createSessionCookie(token, { expiresIn: 60 * 60 * 24 * 5 * 1000});

        res.cookie("session", sessionCookie, {
            maxAge: 60 * 60 * 24 * 5 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
        });

        res.status(201).json({ message: "Registration was successful!" });

    } catch (error) {
        console.log("Oh dear, something went wrong:", error);
    }
    next();
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
    authenticateLoginData,
    decryptRegistrationData,
    authenticateSessionWithFirebase,
    verifySessionCookie,
    logout
};
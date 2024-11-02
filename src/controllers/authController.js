const { getPublicKey, decryptData } = require("../utils/encryption");
const { validationResult } = require('express-validator')

const sendPublicKey = (req, res) => {
    res.json({ publicKey: getPublicKey() });
}

const decryptLoginData = (req, res, next) => {
    try {
        // Deconstruct incoming data
        const { username: encryptedUsername, password: encryptedPassword} = req.body;
        // Decrypt incoming data
        const username = decryptData(encryptedUsername);
        const password = decryptData(encryptedPassword);
        // Prepare body for incoming data validation
        req.body.username = username;
        req.body.password = password;
        
    } catch (error) {
        req.body.error = {error : "There was an error logging in." };
        console.log("Oh dear, there was an error:", error);
    }
    next();
}

const checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

const authenticateLoginData = (req, res, next) => {
    console.log("I will authenticate login data with firebase!");
    next();
}

const decryptRegistrationData = (req, res, next) => {
    try {
        // Deconstruct incoming data
        const { fullname: encryptedFullname,
                username: encryptedUsername, 
                email: encryptedEmail,
                password: encryptedPassword,
            } = req.body;
        // Decrypt incoming data
        const fullname = decryptData(encryptedFullname);
        const username = decryptData(encryptedUsername);
        const email = decryptData(encryptedEmail);
        const password = decryptData(encryptedPassword);
        // Set body ready for validation
        req.body.fullname = fullname;
        req.body.username = username;
        req.body.email = email;
        req.body.password = password;

    } catch (error) {
        req.body.error = { error: "There was an error registering" };
        console.log("Holy moly Batman, there was an error:", error);
    }
    next();
}

const authenticateRegistrationData = (req, res, next) => {
    console.log("I will authenticate registration data with firebase!");
    next();
}

module.exports = { sendPublicKey, 
                decryptLoginData,
                checkValidationErrors,
                authenticateLoginData,
                decryptRegistrationData,
                authenticateRegistrationData
            };
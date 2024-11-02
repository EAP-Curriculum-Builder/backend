const { decryptData } = require('../utils/encryption');

const loginHandler = async (req, res) => {
    try {
        const { username: encryptedUsername, password: encryptedPassword} = req.body;

        const username = decryptData(encryptedUsername);
        const password = decryptData(encryptedPassword);

        console.log(username);
        console.log(password);
    } catch (error) {
        console.log("Oh dear, there was an error:", error);
    }
}

const registrationHandler = async (req, res) => {
    try {
        const { fullname: encryptedFullname,
                username: encryptedUsername, 
                email: encryptedEmail,
                password: encryptedPassword,
            } = req.body;
        const fullname = decryptData(encryptedFullname);
        const username = decryptData(encryptedUsername);
        const email = decryptData(encryptedEmail);
        const password = decryptData(encryptedPassword);

        console.log(fullname);
        console.log(username);
        console.log(email);
        console.log(password);
    } catch (error) {
        console.log("Holy moly Batman, there was an error:", error);
    }
}

module.exports = { loginHandler, registrationHandler };
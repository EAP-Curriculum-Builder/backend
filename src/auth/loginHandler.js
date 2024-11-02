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

module.exports = { loginHandler }
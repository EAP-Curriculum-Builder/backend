const { getPublicKey } = require("../utils/encryption");
const { loginHandler } = require('../auth/loginHandler');

const sendPublicKey = (req, res) => {
    res.json({ publicKey: getPublicKey() });
}

const register = (req, res) => {
    registrationHandler(res, res);
}

const login = (req, res) => {
    loginHandler(req, res);
}

module.exports = { sendPublicKey, login, register };
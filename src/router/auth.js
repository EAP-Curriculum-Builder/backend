const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();
router.use(express.json());

router.get('/public-key', authController.sendPublicKey);
router.post('/register', authController.register);
router.post('/login', authController.login)

module.exports = router;
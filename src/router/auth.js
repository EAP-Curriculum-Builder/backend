const express = require("express");
const authController = require("../controllers/authController");
const { loginValidation, registerValidation } = require("../utils/validationRules");

const router = express.Router();
router.use(express.json());

router.get('/public-key', authController.sendPublicKey);

router.post('/register', 
    authController.decryptRegistrationData, 
    registerValidation, 
    authController.checkValidationErrors, 
    authController.authenticateRegistrationData
);

router.post('/login', 
    authController.decryptLoginData, 
    loginValidation, 
    authController.checkValidationErrors, 
    authController.authenticateLoginData
);

module.exports = router;
const express = require("express");
const authController = require("../controllers/authController");
const { loginValidation, registerValidation } = require("../utils/validationRules");
const csrf = require("csurf");

const router = express.Router();
router.use(express.json());

// Cross-site request forgery protection
const csrfProtection = csrf({ cookie: true });
router.get('/public-key-csrf', csrfProtection, authController.prepCSRF, authController.sendPublicKey);

router.post('/register',
    csrfProtection,
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
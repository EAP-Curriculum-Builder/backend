const express = require("express");
const authController = require("../controllers/authController");
const { registerValidation } = require("../utils/validationRules");
const csrf = require("csurf");

const router = express.Router();
router.use(express.json());

// Cross-site request forgery protection
// Requested on initial access to the website
const csrfProtection = csrf({ cookie: true });
router.get('/public-key-csrf',
    csrfProtection,
    authController.prepCSRF,
    authController.sendPublicKey
);

// If a session cookie was present, verify the session cookie first.
// This is done on initial access to the website
router.get('/verify-session',
    csrfProtection,
    authController.verifySessionCookie,
    (req, res) => {
        res.status(200).json({ message: "session verified" });
    }
);

router.post('/register',
    csrfProtection,
    authController.decryptRegistrationData, 
    registerValidation, 
    authController.checkValidationErrors, 
    authController.insertNewUser,
    authController.authenticateSessionWithFirebase
);

router.post('/login',
    csrfProtection,
    authController.decryptLoginData,
    authController.getUserByUID,
    authController.authenticateSessionWithFirebase
);

router.get('/logout',
  csrfProtection,
  authController.verifySessionCookie,
  authController.logout  
);

module.exports = router;
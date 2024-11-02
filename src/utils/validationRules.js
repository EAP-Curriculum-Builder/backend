const { body } = require("express-validator");

const registerValidation = [
    body('fullname')
        .trim()
        .notEmpty().withMessage('You must provide a valid full name')
        .isLength({ min: 6 }).withMessage('Your full name must be at least 6 characters')
        .escape(),
    body('username')
        .trim()
        .notEmpty().withMessage('You must provide a valid username')
        .isLength({ min: 6 }).withMessage('Your username must be at least 6 characters')
        .escape(),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    body('password')
        .trim()
        .notEmpty().withMessage('You must provide a value password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .matches(/^\S+$/).withMessage('Password must not contain whitespace.')
        .matches(/\d/).withMessage('Password must contain at least one number.')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
        .matches(/[!@#$%&_~`|]/).withMessage('Password must contain at least one special character from !@#$%&_~`|')
        .escape()
];

const loginValidation = [
    body('username')
        .trim()
        .notEmpty().withMessage('You must provide a valid username')
        .isLength({ min: 6 }).withMessage('Your username must be at least 6 characters')
        .escape(),
    body('password')
        .trim()
        .notEmpty().withMessage('You must provide a value password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .matches(/^\S+$/).withMessage('Password must not contain whitespace.')
        .matches(/\d/).withMessage('Password must contain at least one number.')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
        .matches(/[!@#$%&_~`|]/).withMessage('Password must contain at least one special character from !@#$%&_~`|')
        .escape()
];

module.exports = { loginValidation, registerValidation };
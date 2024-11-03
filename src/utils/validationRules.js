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
];


module.exports = { registerValidation };
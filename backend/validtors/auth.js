const {check} = require('express-validator')

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'), 
    check('email')
        .isEmail()
        .withMessage('Email is required'), 
    check('password')
        .isLength({min:6})
        .withMessage('Password must be six characters')            
]


exports.userSigninValidator = [
  
    check('email')
        .isEmail()
        .withMessage('Email is required'), 
    check('password')
        .isLength({min:6})
        .withMessage('Password must be six characters')            
]
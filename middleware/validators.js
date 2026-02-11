const {body, validationResult} = require('express-validator');

const validateRegistration = (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });

    }
    next();   
}
 const validateRegister = [
   body('fullName').notEmpty().matches(/^[A-Za-z\s]+$/).withMessage("FullName must contain only letters no numbers or symbols"),
    body('age').notEmpty().isInt({min:0}).withMessage("Age is required to create user and must be a positiv number"),
    body('email').notEmpty().isEmail().withMessage("Email is required and must email format"),
    body('password').notEmpty().isLength({min:6}).withMessage("Password must be with 6 characters"),
    validateRegistration
 ];

 const validateLogin = [ 
    body('email').notEmpty().isEmail().withMessage("Email is required and must email format"),
    body('password').notEmpty().withMessage("Password must be with 6 characters"),
    validateRegistration
 ]

 module.exports = {
    validateRegister, validateLogin
 }
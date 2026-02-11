const express = require("express");
const route = express.Router();
const { reconstructFieldPath } = require('express-validator/lib/field-selection');
const userController = require("../controllers/user.controllers");
const  auth  = require('../middleware/auth');
const { validateRegister, validateLogin} = require('../middleware/validators');


route.post('/register', validateRegister, userController.register);
route.post('/login', validateLogin, userController.login);
route.get('/get-users',  userController.getAllUsers);
route.get('/get-user/:id', auth, userController.getUserById);
route.put('/update-user/:id', auth, userController.updateUser);
route.delete('/delete-user/:id', auth, userController.deleteUser);

module.exports = route;
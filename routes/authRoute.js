const express = require('express');
const registerController = require('../controller/authController');
const loginController = require('../controller/authController')

// ROUTER OBJECT.
const router = express.Router()

// ROUTING.
// REGISTER | METHOD POST.
router.post('/register', registerController);

// LOGIN | METHOD POST.
router.post('/login', loginController);

module.exports =  router;
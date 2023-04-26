const express = require('express');
const loginController = require('../controller/authController')
const registerController= require('../controller/authController');
const requireSignIn = require('../middlewares/authMiddleware')
const testController = require('../controller/authController')

// ROUTER OBJECT.
const router = express.Router()

// ROUTING.
// REGISTER | METHOD POST.
router.post('/register', registerController);

// LOGIN | METHOD POST.
router.post('/login', loginController);

// tester.
router.get('/test', requireSignIn, testController);

module.exports =  router;
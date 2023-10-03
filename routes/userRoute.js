const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

//router object 
const router = express.Router()

//routers 
//Post || Login user
router.post('/login', loginController)

//Post || Register user
router.post('/register', registerController)

module.exports = router;
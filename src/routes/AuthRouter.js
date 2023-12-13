const express = require('express');
const { authSignup, authLogin,authUpdate } = require('../controller/AuthController');
const AuthRouter = express.Router()


AuthRouter.post('/signup',authSignup);

AuthRouter.post('/login',authLogin);

AuthRouter.put('/update',authUpdate);

module.exports = AuthRouter;
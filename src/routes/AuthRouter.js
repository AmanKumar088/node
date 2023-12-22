const express = require('express');
const { authSignup, authLogin,authUpdate, updateStatus } = require('../controller/AuthController');
const AuthRouter = express.Router()


AuthRouter.post('/signup',authSignup);

AuthRouter.post('/login',authLogin);

AuthRouter.put('/update',authUpdate);

AuthRouter.post('/status',updateStatus)

module.exports = AuthRouter;
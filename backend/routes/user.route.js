const express = require('express');
const userRouter = express.Router();
const { createUserController, loginUserController } = require('../controllers/user.controller.js');

userRouter.get('/login', loginUserController);
userRouter.post('/register', createUserController);

module.exports = userRouter;



const express = require('express');
const userRouter = express.Router();
const { userController } = require('../controllers/user.controller.js');

userRouter.get('/test', userController);

module.exports = userRouter;



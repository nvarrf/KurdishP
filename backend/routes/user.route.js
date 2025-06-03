const express = require('express');
const userRouter = express.Router();

const UserModel = require('../models/user.model.js');
const { createUserController, loginUserController, getUserController } = require('../controllers/user.controller.js');
userRouter.get('/:username', getUserController);
userRouter.get('/auth/login', loginUserController);
userRouter.post('/auth/register', createUserController);




module.exports = userRouter;



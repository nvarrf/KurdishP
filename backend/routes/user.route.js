const express = require('express');
const userRouter = express.Router();

const UserModel = require('../models/user.model.js');
const { createUserController, loginUserController, getUserController, logoutUserController } = require('../controllers/user.controller.js');
userRouter.get('/:username', getUserController);
userRouter.post('/auth/login', loginUserController);
userRouter.post('/auth/register', createUserController);
userRouter.post('/auth/logout', logoutUserController);





module.exports = userRouter;



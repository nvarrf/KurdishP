const express = require('express');
const userRouter = express.Router();
const verifyToken = require('../middleware/verifyToken.js');

const UserModel = require('../models/user.model.js');
const { createUserController, loginUserController,
    getUserController, logoutUserController,
    followUserController }
    = require('../controllers/user.controller.js');
userRouter.get('/:username', getUserController);
userRouter.post('/auth/login', loginUserController);
userRouter.post('/auth/register', createUserController);
userRouter.post('/auth/logout', logoutUserController);
userRouter.post('/follow/:username', verifyToken, followUserController);





module.exports = userRouter;



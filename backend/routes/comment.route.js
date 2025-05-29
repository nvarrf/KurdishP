const express = require('express');
const commentRouter = express.Router();
const { commentController } = require('../controllers/comment.controller.js');

commentRouter.get('/test', commentController);




module.exports = commentRouter 
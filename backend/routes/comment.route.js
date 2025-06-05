const express = require('express');
const commentRouter = express.Router();
const { getPostComments, addComment } = require('../controllers/comment.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

commentRouter.get('/:postId', getPostComments);
commentRouter.post('/', verifyToken, addComment);




module.exports = commentRouter 
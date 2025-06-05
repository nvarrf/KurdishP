const express = require('express');
const commentRouter = express.Router();
const { getPostComments, addComment, deleteComment } = require('../controllers/comment.controller.js');
const verifyToken = require('../middleware/verifyToken.js');

commentRouter.get('/:postId', getPostComments);
commentRouter.post('/', verifyToken, addComment);
commentRouter.delete('/:commentId', verifyToken, deleteComment);




module.exports = commentRouter 
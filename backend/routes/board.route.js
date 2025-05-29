const express = require('express');
const boardRouter = express.Router();
const { boardController } = require('../controllers/board.controller.js');
boardRouter.get('/test', boardController);


module.exports = boardRouter 
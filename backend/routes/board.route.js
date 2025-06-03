const express = require('express');
const boardRouter = express.Router();
const { getUserBoards } = require('../controllers/board.controller.js');
boardRouter.get('/:userId', getUserBoards);

module.exports = boardRouter 
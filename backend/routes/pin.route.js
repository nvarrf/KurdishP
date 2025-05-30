const express = require('express');
const pinRouter = express.Router();
const { getPins } = require('../controllers/pin.controller.js');

pinRouter.get('/', getPins);




module.exports = pinRouter 
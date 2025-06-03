const express = require('express');
const pinRouter = express.Router();
const { getPins, getPin } = require('../controllers/pin.controller.js');

pinRouter.get('/', getPins);

pinRouter.get('/:id', getPin);




module.exports = pinRouter; 
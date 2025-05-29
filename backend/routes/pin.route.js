const express = require('express');
const pinRouter = express.Router();
const { pinController } = require('../controllers/pin.controller.js');

pinRouter.get('/test', pinController);




module.exports = pinRouter 
const express = require('express');
const router = express.Router();
const { getState } = require('../controllers/stateController');
const asyncErrorHandler = require('../utils/errorHandlers').asyncErrorHandler;

router.get('/', asyncErrorHandler(getState));

module.exports = router;
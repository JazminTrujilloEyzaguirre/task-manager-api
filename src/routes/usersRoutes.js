const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');
const asyncErrorHandler = require('../utils/errorHandlers').asyncErrorHandler;

router.route('/')
  .get(asyncErrorHandler(usersController.getUsers))
  .post(asyncErrorHandler(usersController.createUser))

router.route('/:id')
  .get(asyncErrorHandler(usersController.getUserById))
  .put(asyncErrorHandler(usersController.updateUser))
  .delete(asyncErrorHandler(usersController.deleteUser))

module.exports = router;

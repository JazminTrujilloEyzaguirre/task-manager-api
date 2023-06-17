const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const { asyncErrorHandler } = require('../utils/errorHandlers');

router.route('/')
  .get(asyncErrorHandler(tasksController.getTasks))
  .post(asyncErrorHandler(tasksController.createTask));

router.route('/:id')
  .get(asyncErrorHandler(tasksController.getTaskById))
  .put(asyncErrorHandler(tasksController.updateTask))
  .delete(asyncErrorHandler(tasksController.deleteTask));

router.get('/state/:stateId', asyncErrorHandler(tasksController.getTasksByState));
router.get('/user/:userId', asyncErrorHandler(tasksController.getTasksByUser));

module.exports = router;

const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');

router
    .get('/', workoutController.getAllWorkout)
    .get('/:workoutId', workoutController.getWorkoutById)
    .post('/create', workoutController.createWorkout)
    .put('/update/:workoutId', workoutController.updateWorkout)
    .delete('/delete/:workoutId', workoutController.deleteWorkout);

module.exports = router;
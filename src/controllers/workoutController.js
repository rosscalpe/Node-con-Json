const workoutService = require('../services/workoutService');

const getAllWorkout = (req, res)=>{
    const allWorkouts = workoutService.getAllWorkout();
    res.send({status: 'ok', data: allWorkouts});
}
const getWorkoutById = (req, res)=>{
    const Workout = workoutService.getWorkoutById(req.params.workoutId);
    res.status(200).send({status: 'ok', data: Workout});
}
const createWorkout = (req, res)=>{
    const { body } = req;
    if(!body. name || !body. mode || !body. equipment || !body. exercises || !body. trainerTips){
        res.status(400).send({status: 'error', message: 'Please provide all required fields'});
    }
    const newWorkout = {
        ...body
    }
    const created = workoutService.createWorkout(newWorkout);
    res.status(201).send({status: 'ok', data: created});
}
const updateWorkout = (req, res)=>{
    const updatedWorkout = workoutService.updateWorkout(req.params.workoutId, req.body);
    res.send({status: 'ok', data: updatedWorkout});
}
const deleteWorkout = (req, res) =>{
    const deleteWorkout = workoutService.deleteWorkout(req.params.workoutId);
    res.send({status: 'ok', data: deleteWorkout});
}
module.exports = {
    getAllWorkout,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
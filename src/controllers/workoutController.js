const workoutService = require('../services/workoutService');

const getAllWorkout = (req, res)=>{
    const allWorkouts = workoutService.getAllWorkout();
    res.send({status: 'ok', data: allWorkouts});
}
const getWorkoutById = (req, res)=>{
    const { params: { workoutId } } = req;
    if(!workoutId){
        res.status(400).send({ status: 'error'});
    }
    const Workout = workoutService.getWorkoutById(workoutId);
    res.status(200).send({status: 'ok', data: Workout});
}
const createWorkout = (req, res)=>{
    const { body } = req;
    if(!body. name || !body. mode || !body. equipment || !body. exercises || !body. trainerTips){
        res.status(400).send({ status: 'error' });
    }
    const newWorkout = {
        ...body
    }
    const created = workoutService.createWorkout(newWorkout);
    res.status(201).send({status: 'ok', data: created});
}
const updateWorkout = (req, res)=>{
    const { body , params: { workoutId } } = req;
    const updated = workoutService.updateWorkout(workoutId, body);
    res.status(200).send({status: 'ok', data: updated});
}
const deleteWorkout = (req, res) =>{
    const { params: { workoutId } } = req;
    if(!workoutId){return}
    workoutService.deleteWorkout(workoutId);
    res.status(204).send({status: 'ok'});
}
module.exports = {
    getAllWorkout,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
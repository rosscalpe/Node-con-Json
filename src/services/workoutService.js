const { v4: uuid } = require('uuid');
const workout = require('../database/workout');

const getAllWorkout = ()=>{
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
}
const getWorkoutById = ()=>{
    const workout = workout.getWorkoutById
    return workout;
}
const createWorkout = (newWorkout)=>{
   const workoutToInsert = {
         ...newWorkout,
            id: uuid(),
            createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
            updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
   }
    const created = workout.createWorkout(workoutToInsert);
    return created;
}
const updateWorkout = ()=>{
    const updated = workout.updateWorkout();
    return updated;
}
const deleteWorkout = ()=>{
    const deleted = workout.deleteWorkout();
    return deleted;
}
module.exports = {
    getAllWorkout,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
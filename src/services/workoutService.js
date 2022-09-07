const { v4: uuid } = require('uuid');
const workout = require('../database/Workout');

const getAllWorkout = ()=>{
    const allWorkout = workout.getAllWorkout();
    return allWorkout;
}
const getWorkoutById = (workoutId)=>{
    const Workout = workout.getWorkoutById(workoutId);
    return Workout;
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
const updateWorkout = (workoutId, changes)=>{
    const updated = workout.updateWorkout(workoutId, changes);
    return updated;
}
const deleteWorkout = (workoutId)=>{
    workout.deleteWorkout(workoutId);
}
module.exports = {
    getAllWorkout,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
}
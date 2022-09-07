const DB = require('./db.json');
const { saveToDB } = require('./utils');

const getAllWorkout = () => {
    return DB.workouts;
}
const getWorkoutById = (id) => {
    return DB.workouts.find((workout) => workout.id === id);
}
const createWorkout = (newWorkout) => {
    const isAlreadyExist = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyExist){
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
}
const updateWorkout = (workoutId, changes) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    const index = DB.workouts.indexOf(workout);
    DB.workouts[index] ={
        ...workout,
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    }
    saveToDB(DB);
    return DB.workouts[index];
}
const deleteWorkout = (workoutId) => {
    const workoutForDelete = DB.workouts.findIndex(workout => workout.id === workoutId);
    if(workoutForDelete === -1){return}
    DB.workouts.splice(workoutForDelete, 1);
    saveToDB(DB);
}

module.exports = { getAllWorkout, getWorkoutById, createWorkout, updateWorkout, deleteWorkout };
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
const updateWorkout = (id, workout) => {
    return DB.workouts.map((workout) => {
        if (workout.id === id) {
            return workout = workout;
        }
    });
}
const deleteWorkout = (id) => {
    const workout = DB.workouts.find((workout) => workout.id === id);
    const index = DB.workouts.indexOf(workout);
    DB.workouts.splice(index, 1);
    return workout;
}

module.exports = { getAllWorkout, getWorkoutById, createWorkout, updateWorkout, deleteWorkout };
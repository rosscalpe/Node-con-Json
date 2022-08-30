const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const v1WorkoutRouter = require('./src/v1/routes/workoutRoutes');


app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.log(err);
});
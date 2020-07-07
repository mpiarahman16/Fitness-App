const {Schema, model }= require ("mongoose");

const exerciseSchema = new Schema({
    // list the types of data inside exercise
    type: {
        "type": String,
    required: true
    },
    name: {
        "type": String,
        required: true
    },
    duration: {
        "type": String,
        required: true
    },
    weight: {
        "type": Number,
    },
    reps: {
        "type": Number,
    },
    sets: {
        "type": Number,
    },
    distance: {
        "type": Number,
    },
});

const WorkoutSchema = new Schema({
    day:{
        type: Date, 
        default: new Date(),
        required: true
    },
    exercises: [exerciseSchema]
});

const Workout = model ("Workout" , WorkoutSchema);

module.exports = Workout;
    

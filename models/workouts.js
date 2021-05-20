const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
    },
    type: { //cardio vs resistence ?
        type: String,
        required: "Enter an exercise type"
    },
    weight:{
        type: Number,
    },
    sets:{
        type: Number,
    },
    reps:{
        type: Number,
    },
    duration:{
        type: Number,
        required: "Enter an exercise duration in minutes",
    },
    distance:{
        type: Number,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    type: { //cardio vs resistence ?
        type: String,
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
        type: Date,
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
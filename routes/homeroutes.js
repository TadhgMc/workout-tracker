const router = require("express").Router();
const Workout = require("../models/workouts");

// redirect to homepage
router.get("/", (req,res) => {

});

//direct to stats page
router.get("/stats", (req,res) => {

});

//go to create exercise
router.get("/exercise", (req,res) => {

});

//go to update exercise(same as create but with an id passed to it)
router.get("/exercise?", (req,res) => {
    
});
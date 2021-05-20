const router = require("express").Router();
const Workout = require("../models/workouts");

//get all
router.get("/api/workouts/", (req, res) => {
    Workout.find({})
        .sort({ dateCreated: -1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get("/api/workouts/range", (req, res) => {

});


//post new workout
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


//update workout<>
router.put("/api/workouts/:id", (req, res) => {
    const exercise = req.body;
    Workout.findOneAndUpdate(
        req.params.id,
        {$push: {exercise}}
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
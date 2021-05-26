const router = require("express").Router();
const Workout = require("../models/workouts");

//get all
router.get("/api/workouts/", (req, res) => {
    console.log("\n get (all) request");
    Workout.find({})
        .sort({ day: 1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//last 7 exercises
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ day: 1})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


//post new workout
router.post("/api/workouts", ({body}, res) => {
    console.log("\n post request", body);
    Workout.create({})
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
    console.log("\n put request", exercise);
    Workout.findOneAndUpdate(
        req.params.id,
        {$push: {exercises: exercise}},
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
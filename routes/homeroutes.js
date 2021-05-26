const router = require("express").Router();
const path = require("path");

// redirect to homepage
// router.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// });

//direct to stats page
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//go to create exercise
router.get("/exercise", (req,res) => {
    console.log("/exercise in homeroutes.js");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;
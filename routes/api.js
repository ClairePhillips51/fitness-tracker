const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration'}
      }
    }
  ]).sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration'}
      }
    }
  ]).sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout.slice(-7));
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
    Workout.update({ _id: req.params.id }, { $push: { exercises: req.body} })
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

module.exports = router;

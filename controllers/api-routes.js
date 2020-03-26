const db = require("../models");
// const mongoose = require("mongoose")

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find().limit(10)
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    })
  })

  app.post("/api/workouts", (req, res)=>{
    db.Workout.create(req.body)
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}},{new: true, runValidators: true})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err)
    })
  })


  ///////

};

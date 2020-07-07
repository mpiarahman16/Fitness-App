var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (dbworkouts) {
      res.json(dbworkouts);
    });
  });
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({}).then(workout => {
        res.json(workout)
    });
  });
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
      .limit(7)
      .then(function (dbworkouts) {
        res.json(dbworkouts);
      });
  });
  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.updateOne({ _id: req.params.id }, req.body).then(function (
      workouts
    ) {
      res.json(workouts);
    });
  });
};

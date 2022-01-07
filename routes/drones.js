const e = require("express");
const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here
require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dbResponse) => {
      console.log("DB Response", dbResponse);
      res.render("drones/list.hbs", { drone: dbResponse });
    })
    .catch((e) => console.error(e));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create(req.body)
    .then((newDrone) => {
      console.log("New ship in the fleet", newDrone);
      res.redirect("/drones");
    })
    .catch((e) => res.redirect("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((foundDrone) => {
    res.render("drones/update-form.hbs", { drone : foundDrone})
  })
  .catch((e) => console.error(e))
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(id, req.body, {new: true })
  .then((editedDrone) => {
    console.log(editedDrone)
    res.redirect("/drones")
  })
  .catch((e) => res.render("/drones/:id/edit"))
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then((wreck) => {
  console.log("Destroyed ship :", wreck)
  res.redirect("/drones")
  })
  .catch((e) => console.error(e))
});

module.exports = router;

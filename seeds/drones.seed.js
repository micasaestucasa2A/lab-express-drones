// Iteration #1

const db = require("../db/index.js");

const drones = [
    {
        name : 'xWing',
        propellers : 4,
        maxSpeed : 15
    },
    {
        name : 'yWing',
        propellers : 2,
        maxSpeed : 10
    },
    {
        name : 'aWing',
        propellers : 2,
        maxSpeed : 20
    }
]

const async = require("hbs/lib/async");
const Drone = require("../models/Drone.model.js");

(async function () {
    try {
       const createDrones = await Drone.create(drones);
       console.log ('Ships added to the Rebel Alliance fleet')
       console.log(createDrones)
       process.exit()
    }
    catch(e) {
console.log(e)
process.exit()
    }
})()
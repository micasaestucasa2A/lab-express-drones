// Iteration #1

const { model, Schema} = require('mongoose')

const droneSchema = new Schema({
    name: {
type : String,
required : true
    },
    propellers: {
        type : Number
    },
    maxSpeed : {
        type : Number
    }

})

const Drone = model("drones", droneSchema)
module.exports = Drone;
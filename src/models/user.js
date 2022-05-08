const { Schema, default: mongoose } = require("mongoose");

const express = require(Express);
const schema = mongoose.schema;

const carSchema = new Schema({
    carName:String,
    carColor:String,
    carCapacity:String
})

const car = mongoose.model('car',carSchema);
module.exports = car;
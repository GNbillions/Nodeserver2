const car = require("../models/car")


exports.getAllCars = (req, res) => {
    car.find().then(response => {
        return res.status(200).json({
            success: true,
            data: response
        })
    }).catch(error => {
        return res.status(400).json({
            success: false,
        })
    })
}
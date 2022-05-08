const {Router} = require('express');
const { getAllCars } = require('../contollers/cars');

const carRouter = Router();

carRouter.get('/', getAllCars)


module.exports = carRouter

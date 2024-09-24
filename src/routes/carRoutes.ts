import express from 'express';
import { createCar, deleteCar, getAllCars, getCarById } from '../controllers/carController';
import { updateCar } from '../controllers/carController';

const router = express.Router();

// add car
router.post('/add/cars', createCar);

// Update car by ID
router.put('/update/cars/:id', updateCar);

// Get All Cars
router.get('/get/cars',getAllCars);

// Get Car By Id
router.get('/get/cars/:id', getCarById);

// Delete car by id
router.delete('/remove/cars/:id', deleteCar);


export default router;

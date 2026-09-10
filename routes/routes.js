const express = require('express');
const { createDay } = require('../controllers/day.controller');
const { createAllMeals } = require('../controllers/allMeals.controller');
const { createOrder } = require('../controllers/order.controller');
const router = express.Router();


router.post('/day', createDay);
router.post('/order', createOrder);
router.post('/allMeals', createAllMeals);

module.exports = router;
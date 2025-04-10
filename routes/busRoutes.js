const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');


router.post('/add',busController.addbus);
router.get('/available/:seats',busController.getBus);
router.get('/:id/bookings',busController.getBusBookings);


module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/add',userController.addUsers);
router.get('/retrieve',userController.getUsers);
router.get('/:id/bookings',userController.getUserBookings);


module.exports = router;
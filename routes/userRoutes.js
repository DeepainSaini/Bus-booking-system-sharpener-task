const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/add',userController.addUsers);
router.get('/retrieve',userController.getUsers);


module.exports = router;
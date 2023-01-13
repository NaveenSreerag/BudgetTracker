const express = require('express');
const { RegisterUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(RegisterUser)
router.route('/all/users').get(getAllUsers)





module.exports= router
const express = require('express');
const router = express.Router();
const eat = require('./utils/eat');
const getDish = require('./utils/getDish');
const login = require('./utils/login');
const profile = require('./utils/profile');
const signUp = require('./utils/signUp');
const addToCart = require('./utils/addToCart');
const getList = require('./utils/getList');
const appointment = require('./utils/appointment');

router.get('/eat', eat.eat);
router.get('/getDish', getDish.getDish);
router.get('/login', login.login);
router.get('/profile', profile.profile);
router.get('/getList', getList.getList);
router.get('/addToCart', addToCart.addToCart);

router.post('/signUp', signUp.signUp);
router.post('/appointment', appointment.appointment);

module.exports = router;
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const Supplier = require('../models/supplier');
const Consumer = require('../models/consumer');
const Order = require('../models/order');
const Offer = require('../models/offer');

const saltRounds = 10;

router.get('/logout', async (req, res, next) => {

});

router.post('/login', async (req, res, next) => {

});

router.post('/signup', async (req, res, next) => {

});

module.exports = router;

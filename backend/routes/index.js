const express = require('express');
const router = express.Router();

// Require controllers
const all = require('../controllers/all');
const form = require('../controllers/form');
const details = require('../controllers/details');

// Set up routes
router.get('/', all);
router.get('/new', form);
router.get('/message/:id', details)

module.exports = router;

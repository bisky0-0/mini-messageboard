const express = require('express');
const router = express.Router();

// Require controller
const newMsg = require('../controllers/new');

// Set up route
router.post('/new', newMsg);

module.exports = router;

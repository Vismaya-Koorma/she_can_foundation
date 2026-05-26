const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define the POST /api/contact route
router.post('/contact', contactController.submitContactForm);

module.exports = router;

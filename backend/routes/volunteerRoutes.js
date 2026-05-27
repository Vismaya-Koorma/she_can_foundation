const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

// Define the POST /api/join route
router.post('/join', volunteerController.submitJoinForm);

// Define the GET /api/volunteers route (optional/for admin)
router.get('/volunteers', volunteerController.getAllVolunteers);

module.exports = router;

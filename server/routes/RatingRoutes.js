const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

// Get all ratings
router.get('/ratings', ratingController.getAllRatings);

// Get rating by ID
router.get('/ratings/:id', ratingController.getRatingById);

// Create a new rating
router.post('/ratings', ratingController.createRating);

// Update an existing rating
router.put('/ratings/:id', ratingController.updateRating);

// Delete a rating
router.delete('/ratings/:id', ratingController.deleteRating);

module.exports = router;

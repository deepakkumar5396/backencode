const express = require('express');
const router = express.Router();
const bookingRequestController = require('../controllers/bookingRequestController');

// Get all booking requests
router.get('/booking-requests', bookingRequestController.getAllBookingRequests);

// Get booking request by ID
router.get('/booking-requests/:id', bookingRequestController.getBookingRequestById);

// Create a new booking request
router.post('/booking-requests', bookingRequestController.createBookingRequest);

// Update an existing booking request
router.put('/booking-requests/:id', bookingRequestController.updateBookingRequest);

// Delete a booking request
router.delete('/booking-requests/:id', bookingRequestController.deleteBookingRequest);

module.exports = router;

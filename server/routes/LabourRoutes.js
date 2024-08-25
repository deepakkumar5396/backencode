const express = require('express');
const router = express.Router();
const labourController = require('../controllers/LabourController');

// Get all labours
router.get('/labours', labourController.getAllLabours);

// Get labour by ID
router.get('/labours/:id', labourController.getLabourById);

// Create a new labour profile
router.post('/labours', labourController.createLabour);

// Update an existing labour profile
router.put('/labours/:id', labourController.updateLabour);

// Delete a labour profile
router.delete('/labours/:id', labourController.deleteLabour);

module.exports = router;

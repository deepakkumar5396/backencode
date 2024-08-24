const express = require('express');
const router = express.Router();
const jobRequirementController = require('../controllers/jobRequirementController');

// Get all job requirements
router.get('/job-requirements', jobRequirementController.getAllJobRequirements);

// Get job requirement by ID
router.get('/job-requirements/:id', jobRequirementController.getJobRequirementById);

// Create a new job requirement
router.post('/job-requirements', jobRequirementController.createJobRequirement);

// Update an existing job requirement
router.put('/job-requirements/:id', jobRequirementController.updateJobRequirement);

// Delete a job requirement
router.delete('/job-requirements/:id', jobRequirementController.deleteJobRequirement);

module.exports = router;

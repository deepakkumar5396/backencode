const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Get all jobs
router.get('/jobs', jobController.getAllJobs);

// Get job by ID
router.get('/jobs/:id', jobController.getJobById);

// Create a new job
router.post('/jobs', jobController.createJob);

// Update an existing job
router.put('/jobs/:id', jobController.updateJob);

// Delete a job
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;

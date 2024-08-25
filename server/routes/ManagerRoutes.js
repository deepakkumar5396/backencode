const express = require('express');
const router = express.Router();
const managerController = require('../controllers/ManagerController');

// Get all managers
router.get('/managers', managerController.getAllManagers);

// Get manager by ID
router.get('/managers/:id', managerController.getManagerById);

// Create a new manager
router.post('/managers', managerController.createManager);

// Update an existing manager
router.put('/managers/:id', managerController.updateManager);

// Delete a manager
router.delete('/managers/:id', managerController.deleteManager);

module.exports = router;

const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

// Get all roles
router.get('/roles', roleController.getAllRoles);

// Get role by ID
router.get('/roles/:id', roleController.getRoleById);

// Create a new role
router.post('/roles', roleController.createRole);

// Update an existing role
router.put('/roles/:id', roleController.updateRole);

// Delete a role
router.delete('/roles/:id', roleController.deleteRole);

module.exports = router;

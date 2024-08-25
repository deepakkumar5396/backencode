const express = require('express');
const router = express.Router();
const addressController = require('../controllers/AddressController');

// Get all addresses
router.get('/addresses', addressController.getAllAddresses);

// Get address by ID
router.get('/addresses/:id', addressController.getAddressById);

// Create a new address
router.post('/addresses', addressController.createAddress);

// Update an existing address
router.put('/addresses/:id', addressController.updateAddress);

// Delete an address
router.delete('/addresses/:id', addressController.deleteAddress);

module.exports = router;

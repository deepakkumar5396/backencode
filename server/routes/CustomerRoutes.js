const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

// Get all customers
router.get('/customers', customerController.getAllCustomers);

// Get customer by ID
router.get('/customers/:id', customerController.getCustomerById);

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Update an existing customer
router.put('/customers/:id', customerController.updateCustomer);

// Delete a customer
router.delete('/customers/:id', customerController.deleteCustomer);

module.exports = router;

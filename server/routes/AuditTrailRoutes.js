const express = require('express');
const router = express.Router();
const auditTrailController = require('../controllers/auditTrailController');

// Get all audit trails
router.get('/audit-trails', auditTrailController.getAllAuditTrails);

// Get audit trail by ID
router.get('/audit-trails/:id', auditTrailController.getAuditTrailById);

// Create a new audit trail record
router.post('/audit-trails', auditTrailController.createAuditTrail);

// Update an existing audit trail record
router.put('/audit-trails/:id', auditTrailController.updateAuditTrail);

// Delete an audit trail record
router.delete('/audit-trails/:id', auditTrailController.deleteAuditTrail);

module.exports = router;

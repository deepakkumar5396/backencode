const express = require('express');
const router = express.Router();

// Import all route modules
const roleRoutes = require('./RoleRoutes');
const userRoutes = require('./UserRoutes');
const addressRoutes = require('./AddressRoutes');
const jobRoutes = require('./JobRoutes');
const labourRoutes = require('./LabourRoutes');
const customerRoutes = require('./CustomerRoutes');
const managerRoutes = require('./ManagerRoutes');
const adminRoutes = require('./AdminRoutes');
const jobRequirementRoutes = require('./JobRequirementRoutes');
const bookingRequestRoutes = require('./BookingRequestRoutes');
const ratingRoutes = require('./RatingRoutes');
const auditTrailRoutes = require('./AuditTrailRoutes');

// Use the imported routes
router.use(roleRoutes);
router.use(userRoutes);
router.use( addressRoutes);
router.use(jobRoutes);
router.use(labourRoutes);
router.use(customerRoutes);
router.use(managerRoutes);
router.use(adminRoutes);
router.use(jobRequirementRoutes);
router.use(bookingRequestRoutes);
router.use(ratingRoutes);
router.use(auditTrailRoutes);

module.exports = router;

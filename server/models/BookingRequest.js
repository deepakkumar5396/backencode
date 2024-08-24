const mongoose = require('mongoose');

const bookingRequestSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Customer',
        required: true
    },
    managerId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Manager',
        required: true
    },
    labourId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Labour',
        required: true
    },
    jobRequirementId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'JobRequirement',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    duration: {
        type: String // Interval is not directly supported in MongoDB
    },
    requestedAt: {
        type: Date,
        default: Date.now
    },
    approvedAt: {
        type: Date
    },
    rejectedAt: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BookingRequest', bookingRequestSchema);

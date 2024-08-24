const mongoose = require('mongoose');

const jobRequirementSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Customer',
        required: true
    },
    jobId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Job',
        required: true
    },
    numberOfLabour: {
        type: Number
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    description: {
        type: String
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('JobRequirement', jobRequirementSchema);

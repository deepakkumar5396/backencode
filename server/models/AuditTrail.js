const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('AuditTrail', auditTrailSchema);

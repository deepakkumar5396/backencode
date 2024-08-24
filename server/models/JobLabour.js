const mongoose = require('mongoose');

const jobLabourSchema = new mongoose.Schema({
    labourId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Labour',
        required: true
    },
    jobId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Job',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('JobLabour', jobLabourSchema);

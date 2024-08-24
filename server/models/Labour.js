const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'User',
        required: true
    },
    yearsOfExperience: {
        type: Number
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    profileCreatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Labour', labourSchema);

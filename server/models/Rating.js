const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Customer',
        required: true
    },
    labourId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'Labour',
        required: true
    },
    bookingRequestId: {
        type: mongoose.Schema.Types.UUID,
        ref: 'BookingRequest',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String
    },
    ratedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Rating', ratingSchema);

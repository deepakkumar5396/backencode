const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    pincode: {
        type: String,
        maxlength: 6
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    district: {
        type: String
    },
    landmark: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Address', addressSchema);

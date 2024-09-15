const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        unique: true,
        required: true
    },
    permanentAddress: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of UUID
        ref: 'Address'
    },
    currentAddress: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of UUID
        ref: 'Address'
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    idType: {
        type: String,
        enum: ['Aadhar', 'Voter Card', 'PAN Card']
    },
    idNumber: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

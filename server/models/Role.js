const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleName: {
        type: String,
        enum: ['Labour', 'Customer', 'Manager', 'Admin'], 
        unique: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Role', roleSchema);

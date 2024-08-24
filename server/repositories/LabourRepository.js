const Labour = require('../models/Labour');

class LabourRepository {
    async createLabour(labourData, session) {
        const labour = new Labour(labourData);
        return await labour.save({ session });
    }

    async getAllLabours() {
        return await Labour.find();
    }

    async getLabourById(labourId) {
        return await Labour.findById(labourId);
    }

    async updateLabour(labourId, labourData, session) {
        return await Labour.findByIdAndUpdate(labourId, labourData, { new: true, session });
    }

    async deleteLabour(labourId, session) {
        return await Labour.findByIdAndDelete(labourId, { session });
    }
}

module.exports = new LabourRepository();

const labourRepository = require('../repositories/LabourRepository');
const mongoose = require('mongoose');

class LabourService {
    async createLabour(labourData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const labour = await labourRepository.createLabour(labourData, session);
            await session.commitTransaction();
            return labour;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllLabours() {
        return await labourRepository.getAllLabours();
    }

    async getLabourById(labourId) {
        return await labourRepository.getLabourById(labourId);
    }

    async updateLabour(labourId, labourData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const labour = await labourRepository.updateLabour(labourId, labourData, session);
            await session.commitTransaction();
            return labour;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteLabour(labourId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await labourRepository.deleteLabour(labourId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new LabourService();

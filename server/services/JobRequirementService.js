const jobRequirementRepository = require('../repositories/JobRequirementRepository');
const mongoose = require('mongoose');

class JobRequirementService {
    async createJobRequirement(jobRequirementData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const jobRequirement = await jobRequirementRepository.createJobRequirement(jobRequirementData, session);
            await session.commitTransaction();
            return jobRequirement;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllJobRequirements() {
        return await jobRequirementRepository.getAllJobRequirements();
    }

    async getJobRequirementById(jobRequirementId) {
        return await jobRequirementRepository.getJobRequirementById(jobRequirementId);
    }

    async updateJobRequirement(jobRequirementId, jobRequirementData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const jobRequirement = await jobRequirementRepository.updateJobRequirement(jobRequirementId, jobRequirementData, session);
            await session.commitTransaction();
            return jobRequirement;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteJobRequirement(jobRequirementId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await jobRequirementRepository.deleteJobRequirement(jobRequirementId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new JobRequirementService();

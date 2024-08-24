const jobRepository = require('../repositories/JobRepository');
const mongoose = require('mongoose');

class JobService {
    async createJob(jobData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const job = await jobRepository.createJob(jobData, session);
            await session.commitTransaction();
            return job;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllJobs() {
        return await jobRepository.getAllJobs();
    }

    async getJobById(jobId) {
        return await jobRepository.getJobById(jobId);
    }

    async updateJob(jobId, jobData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const job = await jobRepository.updateJob(jobId, jobData, session);
            await session.commitTransaction();
            return job;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteJob(jobId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await jobRepository.deleteJob(jobId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new JobService();

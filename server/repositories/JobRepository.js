const Job = require('../models/Job');

class JobRepository {
    async createJob(jobData, session) {
        const job = new Job(jobData);
        return await job.save({ session });
    }

    async getAllJobs() {
        return await Job.find();
    }

    async getJobById(jobId) {
        return await Job.findById(jobId);
    }

    async updateJob(jobId, jobData, session) {
        return await Job.findByIdAndUpdate(jobId, jobData, { new: true, session });
    }

    async deleteJob(jobId, session) {
        return await Job.findByIdAndDelete(jobId, { session });
    }
}

module.exports = new JobRepository();

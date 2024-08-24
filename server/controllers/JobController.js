const jobService = require('../services/JobService');

class JobController {
    async createJob(req, res, next) {
        try {
            const jobData = req.body;
            const job = await jobService.createJob(jobData);
            res.status(201).json(job);
        } catch (error) {
            next(error);
        }
    }

    async getAllJobs(req, res, next) {
        try {
            const jobs = await jobService.getAllJobs();
            res.status(200).json(jobs);
        } catch (error) {
            next(error);
        }
    }

    async getJobById(req, res, next) {
        try {
            const jobId = req.params.id;
            const job = await jobService.getJobById(jobId);
            res.status(200).json(job);
        } catch (error) {
            next(error);
        }
    }

    async updateJob(req, res, next) {
        try {
            const jobId = req.params.id;
            const jobData = req.body;
            const job = await jobService.updateJob(jobId, jobData);
            res.status(200).json(job);
        } catch (error) {
            next(error);
        }
    }

    async deleteJob(req, res, next) {
        try {
            const jobId = req.params.id;
            await jobService.deleteJob(jobId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new JobController();

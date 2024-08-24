const jobRequirementService = require('../services/JobRequirementService');

class JobRequirementController {
    async createJobRequirement(req, res, next) {
        try {
            const jobRequirementData = req.body;
            const jobRequirement = await jobRequirementService.createJobRequirement(jobRequirementData);
            res.status(201).json(jobRequirement);
        } catch (error) {
            next(error);
        }
    }

    async getAllJobRequirements(req, res, next) {
        try {
            const jobRequirements = await jobRequirementService.getAllJobRequirements();
            res.status(200).json(jobRequirements);
        } catch (error) {
            next(error);
        }
    }

    async getJobRequirementById(req, res, next) {
        try {
            const jobRequirementId = req.params.id;
            const jobRequirement = await jobRequirementService.getJobRequirementById(jobRequirementId);
            res.status(200).json(jobRequirement);
        } catch (error) {
            next(error);
        }
    }

    async updateJobRequirement(req, res, next) {
        try {
            const jobRequirementId = req.params.id;
            const jobRequirementData = req.body;
            const jobRequirement = await jobRequirementService.updateJobRequirement(jobRequirementId, jobRequirementData);
            res.status(200).json(jobRequirement);
        } catch (error) {
            next(error);
        }
    }

    async deleteJobRequirement(req, res, next) {
        try {
            const jobRequirementId = req.params.id;
            await jobRequirementService.deleteJobRequirement(jobRequirementId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new JobRequirementController();

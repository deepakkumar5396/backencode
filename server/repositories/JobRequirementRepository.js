const JobRequirement = require('../models/JobRequirement');

class JobRequirementRepository {
    async createJobRequirement(jobRequirementData, session) {
        const jobRequirement = new JobRequirement(jobRequirementData);
        return await jobRequirement.save({ session });
    }

    async getAllJobRequirements() {
        return await JobRequirement.find();
    }

    async getJobRequirementById(jobRequirementId) {
        return await JobRequirement.findById(jobRequirementId);
    }

    async updateJobRequirement(jobRequirementId, jobRequirementData, session) {
        return await JobRequirement.findByIdAndUpdate(jobRequirementId, jobRequirementData, { new: true, session });
    }

    async deleteJobRequirement(jobRequirementId, session) {
        return await JobRequirement.findByIdAndDelete(jobRequirementId, { session });
    }
}

module.exports = new JobRequirementRepository();

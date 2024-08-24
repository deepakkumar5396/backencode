const AuditTrail = require('../models/AuditTrail');

class AuditTrailRepository {
    async createAuditTrail(auditTrailData, session) {
        const auditTrail = new AuditTrail(auditTrailData);
        return await auditTrail.save({ session });
    }

    async getAllAuditTrails() {
        return await AuditTrail.find();
    }

    async getAuditTrailById(auditTrailId) {
        return await AuditTrail.findById(auditTrailId);
    }

    async updateAuditTrail(auditTrailId, auditTrailData, session) {
        return await AuditTrail.findByIdAndUpdate(auditTrailId, auditTrailData, { new: true, session });
    }

    async deleteAuditTrail(auditTrailId, session) {
        return await AuditTrail.findByIdAndDelete(auditTrailId, { session });
    }
}

module.exports = new AuditTrailRepository();

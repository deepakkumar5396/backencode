const auditTrailRepository = require('../repositories/AuditTrailRepository');
const mongoose = require('mongoose');

class AuditTrailService {
    async createAuditTrail(auditTrailData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const auditTrail = await auditTrailRepository.createAuditTrail(auditTrailData, session);
            await session.commitTransaction();
            return auditTrail;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllAuditTrails() {
        return await auditTrailRepository.getAllAuditTrails();
    }

    async getAuditTrailById(auditTrailId) {
        return await auditTrailRepository.getAuditTrailById(auditTrailId);
    }

    async updateAuditTrail(auditTrailId, auditTrailData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const auditTrail = await auditTrailRepository.updateAuditTrail(auditTrailId, auditTrailData, session);
            await session.commitTransaction();
            return auditTrail;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteAuditTrail(auditTrailId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await auditTrailRepository.deleteAuditTrail(auditTrailId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new AuditTrailService();

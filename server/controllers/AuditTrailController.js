const auditTrailService = require('../services/AuditTrailService');

class AuditTrailController {
    async createAuditTrail(req, res, next) {
        try {
            const auditTrailData = req.body;
            const auditTrail = await auditTrailService.createAuditTrail(auditTrailData);
            res.status(201).json(auditTrail);
        } catch (error) {
            next(error);
        }
    }

    async getAllAuditTrails(req, res, next) {
        try {
            const auditTrails = await auditTrailService.getAllAuditTrails();
            res.status(200).json(auditTrails);
        } catch (error) {
            next(error);
        }
    }

    async getAuditTrailById(req, res, next) {
        try {
            const auditTrailId = req.params.id;
            const auditTrail = await auditTrailService.getAuditTrailById(auditTrailId);
            res.status(200).json(auditTrail);
        } catch (error) {
            next(error);
        }
    }

    async updateAuditTrail(req, res, next) {
        try {
            const auditTrailId = req.params.id;
            const auditTrailData = req.body;
            const auditTrail = await auditTrailService.updateAuditTrail(auditTrailId, auditTrailData);
            res.status(200).json(auditTrail);
        } catch (error) {
            next(error);
        }
    }

    async deleteAuditTrail(req, res, next) {
        try {
            const auditTrailId = req.params.id;
            await auditTrailService.deleteAuditTrail(auditTrailId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuditTrailController();

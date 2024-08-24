const labourService = require('../services/LabourService');

class LabourController {
    async createLabour(req, res, next) {
        try {
            const labourData = req.body;
            const labour = await labourService.createLabour(labourData);
            res.status(201).json(labour);
        } catch (error) {
            next(error);
        }
    }

    async getAllLabours(req, res, next) {
        try {
            const labours = await labourService.getAllLabours();
            res.status(200).json(labours);
        } catch (error) {
            next(error);
        }
    }

    async getLabourById(req, res, next) {
        try {
            const labourId = req.params.id;
            const labour = await labourService.getLabourById(labourId);
            res.status(200).json(labour);
        } catch (error) {
            next(error);
        }
    }

    async updateLabour(req, res, next) {
        try {
            const labourId = req.params.id;
            const labourData = req.body;
            const labour = await labourService.updateLabour(labourId, labourData);
            res.status(200).json(labour);
        } catch (error) {
            next(error);
        }
    }

    async deleteLabour(req, res, next) {
        try {
            const labourId = req.params.id;
            await labourService.deleteLabour(labourId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new LabourController();

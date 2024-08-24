const managerService = require('../services/ManagerService');

class ManagerController {
    async createManager(req, res, next) {
        try {
            const managerData = req.body;
            const manager = await managerService.createManager(managerData);
            res.status(201).json(manager);
        } catch (error) {
            next(error);
        }
    }

    async getAllManagers(req, res, next) {
        try {
            const managers = await managerService.getAllManagers();
            res.status(200).json(managers);
        } catch (error) {
            next(error);
        }
    }

    async getManagerById(req, res, next) {
        try {
            const managerId = req.params.id;
            const manager = await managerService.getManagerById(managerId);
            res.status(200).json(manager);
        } catch (error) {
            next(error);
        }
    }

    async updateManager(req, res, next) {
        try {
            const managerId = req.params.id;
            const managerData = req.body;
            const manager = await managerService.updateManager(managerId, managerData);
            res.status(200).json(manager);
        } catch (error) {
            next(error);
        }
    }

    async deleteManager(req, res, next) {
        try {
            const managerId = req.params.id;
            await managerService.deleteManager(managerId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ManagerController();

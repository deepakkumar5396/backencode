const adminService = require('../services/AdminService');

class AdminController {
    async createAdmin(req, res, next) {
        try {
            const adminData = req.body;
            const admin = await adminService.createAdmin(adminData);
            res.status(201).json(admin);
        } catch (error) {
            next(error);
        }
    }

    async getAllAdmins(req, res, next) {
        try {
            const admins = await adminService.getAllAdmins();
            res.status(200).json(admins);
        } catch (error) {
            next(error);
        }
    }

    async getAdminById(req, res, next) {
        try {
            const adminId = req.params.id;
            const admin = await adminService.getAdminById(adminId);
            res.status(200).json(admin);
        } catch (error) {
            next(error);
        }
    }

    async updateAdmin(req, res, next) {
        try {
            const adminId = req.params.id;
            const adminData = req.body;
            const admin = await adminService.updateAdmin(adminId, adminData);
            res.status(200).json(admin);
        } catch (error) {
            next(error);
        }
    }

    async deleteAdmin(req, res, next) {
        try {
            const adminId = req.params.id;
            await adminService.deleteAdmin(adminId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AdminController();

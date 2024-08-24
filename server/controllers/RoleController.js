const roleService = require('../services/RoleService');

class RoleController {
    async createRole(req, res, next) {
        try {
            const roleData = req.body;
            const role = await roleService.createRole(roleData);
            res.status(201).json(role);
        } catch (error) {
            next(error);
        }
    }

    async getAllRoles(req, res, next) {
        try {
            const roles = await roleService.getAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            next(error);
        }
    }

    async getRoleById(req, res, next) {
        try {
            const roleId = req.params.id;
            const role = await roleService.getRoleById(roleId);
            res.status(200).json(role);
        } catch (error) {
            next(error);
        }
    }

    async updateRole(req, res, next) {
        try {
            const roleId = req.params.id;
            const roleData = req.body;
            const role = await roleService.updateRole(roleId, roleData);
            res.status(200).json(role);
        } catch (error) {
            next(error);
        }
    }

    async deleteRole(req, res, next) {
        try {
            const roleId = req.params.id;
            await roleService.deleteRole(roleId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RoleController();

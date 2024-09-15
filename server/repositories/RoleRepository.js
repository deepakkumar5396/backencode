const Role = require('../models/Role');

class RoleRepository {
    async createRole(roleData, session) {
        const role = new Role(roleData);
        return await role.save();
    }

    async getAllRoles() {
        return await Role.find();
    }

    async getRoleById(roleId) {
        return await Role.findById(roleId);
    }

    async getRoleByName(roleName) {
        return await Role.findOne({ roleName });
    }

    async updateRole(roleId, roleData, session) {
        return await Role.findByIdAndUpdate(roleId, roleData, { new: true, session });
    }

    async deleteRole(roleId, session) {
        return await Role.findByIdAndDelete(roleId, { session });
    }
}

module.exports = new RoleRepository();

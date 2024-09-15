const roleRepository = require('../repositories/RoleRepository');
const mongoose = require('mongoose');

class RoleService {
    async createRole(roleData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const role = await roleRepository.createRole(roleData, session);
            await session.commitTransaction();
            return role;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllRoles() {
        return await roleRepository.getAllRoles();
    }

    async getRoleById(roleId) {
        return await roleRepository.getRoleById(roleId);
    }

    async updateRole(roleId, roleData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const role = await roleRepository.updateRole(roleId, roleData, session);
            await session.commitTransaction();
            return role;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteRole(roleId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await roleRepository.deleteRole(roleId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    // Additional method to find or create a role
    async findOrCreateRole(roleName) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            let role = await roleRepository.getRoleByName(roleName);
            if (!role) {
                role = await roleRepository.createRole(
                    { roleName, description: `Role for ${roleName}` },
                    session
                );
            }
            await session.commitTransaction();
            return role;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new RoleService();

const adminRepository = require('../repositories/AdminRepository');
const mongoose = require('mongoose');

class AdminService {
    async createAdmin(adminData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const admin = await adminRepository.createAdmin(adminData, session);
            await session.commitTransaction();
            return admin;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllAdmins() {
        return await adminRepository.getAllAdmins();
    }

    async getAdminById(adminId) {
        return await adminRepository.getAdminById(adminId);
    }

    async updateAdmin(adminId, adminData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const admin = await adminRepository.updateAdmin(adminId, adminData, session);
            await session.commitTransaction();
            return admin;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteAdmin(adminId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await adminRepository.deleteAdmin(adminId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new AdminService();

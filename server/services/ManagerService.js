const managerRepository = require('../repositories/ManagerRepository');
const mongoose = require('mongoose');

class ManagerService {
    async createManager(managerData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const manager = await managerRepository.createManager(managerData, session);
            await session.commitTransaction();
            return manager;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllManagers() {
        return await managerRepository.getAllManagers();
    }

    async getManagerById(managerId) {
        return await managerRepository.getManagerById(managerId);
    }

    async updateManager(managerId, managerData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const manager = await managerRepository.updateManager(managerId, managerData, session);
            await session.commitTransaction();
            return manager;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteManager(managerId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await managerRepository.deleteManager(managerId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new ManagerService();

const Manager = require('../models/Manager');

class ManagerRepository {
    async createManager(managerData, session) {
        const manager = new Manager(managerData);
        return await manager.save({ session });
    }

    async getAllManagers() {
        return await Manager.find();
    }

    async getManagerById(managerId) {
        return await Manager.findById(managerId);
    }

    async updateManager(managerId, managerData, session) {
        return await Manager.findByIdAndUpdate(managerId, managerData, { new: true, session });
    }

    async deleteManager(managerId, session) {
        return await Manager.findByIdAndDelete(managerId, { session });
    }
}

module.exports = new ManagerRepository();

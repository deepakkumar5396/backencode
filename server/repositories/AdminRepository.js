const Admin = require('../models/Admin');

class AdminRepository {
    async createAdmin(adminData, session) {
        const admin = new Admin(adminData);
        return await admin.save({ session });
    }

    async getAllAdmins() {
        return await Admin.find();
    }

    async getAdminById(adminId) {
        return await Admin.findById(adminId);
    }

    async updateAdmin(adminId, adminData, session) {
        return await Admin.findByIdAndUpdate(adminId, adminData, { new: true, session });
    }

    async deleteAdmin(adminId, session) {
        return await Admin.findByIdAndDelete(adminId, { session });
    }
}

module.exports = new AdminRepository();

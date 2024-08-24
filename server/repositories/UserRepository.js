const User = require("../models/User");

class UserRepository {
  async createUser(userData, session) {
    const user = new User(userData);
    return await user.save();
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async updateUser(userId, userData, session) {
    return await User.findByIdAndUpdate(userId, userData, {
      new: true,
      session,
    });
  }

  async deleteUser(userId, session) {
    return await User.findByIdAndDelete(userId, { session });
  }
}

module.exports = new UserRepository();

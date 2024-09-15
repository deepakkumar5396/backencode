const userRepository = require("../repositories/UserRepository");
const addressRepository = require("../repositories/AddressRepository");
const roleService = require("../services/RoleService"); // Import RoleService
const mongoose = require("mongoose");

class UserService {
  async createUser(userData) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      // Find or create roles
      const role = await roleService.findOrCreateRole(userData.roleName);

      // Create permanent address
      const permanentAddress = await addressRepository.createAddress(
        userData.permanentAddress,
        session
      );

      // Create current address (optional, if different from permanent address)
      let currentAddress;
      if (userData.currentAddress) {
        currentAddress = await addressRepository.createAddress(
          userData.currentAddress,
          session
        );
      }

      // Add address IDs to userData
      userData.permanentAddress = permanentAddress._id;
      userData.currentAddress = currentAddress
        ? currentAddress._id
        : permanentAddress._id; // If current address is not provided, use permanent address

      // Add role ID to userData
      userData.roleId = role._id;

      // Create the user with the address IDs and role ID
      const user = await userRepository.createUser(userData, session);
      await session.commitTransaction();
      return user;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async getAllUsers() {
    return await userRepository.getAllUsers();
  }

  async getUserById(userId) {
    return await userRepository.getUserById(userId);
  }

  async updateUser(userId, userData) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      // Update addresses if provided
      if (userData.permanentAddress) {
        await addressRepository.updateAddress(
          userData.permanentAddress._id,
          userData.permanentAddress,
          session
        );
      }
      if (userData.currentAddress) {
        await addressRepository.updateAddress(
          userData.currentAddress._id,
          userData.currentAddress,
          session
        );
      }

      // Update the user
      const user = await userRepository.updateUser(userId, userData, session);

      await session.commitTransaction();
      return user;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async deleteUser(userId) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      await userRepository.deleteUser(userId, session);
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}

module.exports = new UserService();

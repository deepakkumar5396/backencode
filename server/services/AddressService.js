const addressRepository = require('../repositories/AddressRepository');
const mongoose = require('mongoose');

class AddressService {
    async createAddress(addressData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const address = await addressRepository.createAddress(addressData, session);
            await session.commitTransaction();
            return address;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllAddresses() {
        return await addressRepository.getAllAddresses();
    }

    async getAddressById(addressId) {
        return await addressRepository.getAddressById(addressId);
    }

    async updateAddress(addressId, addressData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const address = await addressRepository.updateAddress(addressId, addressData, session);
            await session.commitTransaction();
            return address;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteAddress(addressId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await addressRepository.deleteAddress(addressId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new AddressService();

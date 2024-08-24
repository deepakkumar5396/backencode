const Address = require('../models/Address');

class AddressRepository {
    async createAddress(addressData, session) {
        const address = new Address(addressData);
        return await address.save();
    }

    async getAllAddresses() {
        return await Address.find();
    }

    async getAddressById(addressId) {
        return await Address.findById(addressId);
    }

    async updateAddress(addressId, addressData, session) {
        return await Address.findByIdAndUpdate(addressId, addressData, { new: true, session });
    }

    async deleteAddress(addressId, session) {
        return await Address.findByIdAndDelete(addressId, { session });
    }
}

module.exports = new AddressRepository();

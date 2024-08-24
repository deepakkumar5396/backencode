const addressService = require('../services/AddressService');

class AddressController {
    async createAddress(req, res, next) {
        try {
            const addressData = req.body;
            const address = await addressService.createAddress(addressData);
            res.status(201).json(address);
        } catch (error) {
            next(error);
        }
    }

    async getAllAddresses(req, res, next) {
        try {
            const addresses = await addressService.getAllAddresses();
            res.status(200).json(addresses);
        } catch (error) {
            next(error);
        }
    }

    async getAddressById(req, res, next) {
        try {
            const addressId = req.params.id;
            const address = await addressService.getAddressById(addressId);
            res.status(200).json(address);
        } catch (error) {
            next(error);
        }
    }

    async updateAddress(req, res, next) {
        try {
            const addressId = req.params.id;
            const addressData = req.body;
            const address = await addressService.updateAddress(addressId, addressData);
            res.status(200).json(address);
        } catch (error) {
            next(error);
        }
    }

    async deleteAddress(req, res, next) {
        try {
            const addressId = req.params.id;
            await addressService.deleteAddress(addressId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AddressController();

const customerService = require('../services/CustomerService');

class CustomerController {
    async createCustomer(req, res, next) {
        try {
            const customerData = req.body;
            const customer = await customerService.createCustomer(customerData);
            res.status(201).json(customer);
        } catch (error) {
            next(error);
        }
    }

    async getAllCustomers(req, res, next) {
        try {
            const customers = await customerService.getAllCustomers();
            res.status(200).json(customers);
        } catch (error) {
            next(error);
        }
    }

    async getCustomerById(req, res, next) {
        try {
            const customerId = req.params.id;
            const customer = await customerService.getCustomerById(customerId);
            res.status(200).json(customer);
        } catch (error) {
            next(error);
        }
    }

    async updateCustomer(req, res, next) {
        try {
            const customerId = req.params.id;
            const customerData = req.body;
            const customer = await customerService.updateCustomer(customerId, customerData);
            res.status(200).json(customer);
        } catch (error) {
            next(error);
        }
    }

    async deleteCustomer(req, res, next) {
        try {
            const customerId = req.params.id;
            await customerService.deleteCustomer(customerId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CustomerController();

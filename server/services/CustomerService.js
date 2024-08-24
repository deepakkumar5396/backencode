const customerRepository = require('../repositories/CustomerRepository');
const mongoose = require('mongoose');

class CustomerService {
    async createCustomer(customerData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const customer = await customerRepository.createCustomer(customerData, session);
            await session.commitTransaction();
            return customer;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllCustomers() {
        return await customerRepository.getAllCustomers();
    }

    async getCustomerById(customerId) {
        return await customerRepository.getCustomerById(customerId);
    }

    async updateCustomer(customerId, customerData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const customer = await customerRepository.updateCustomer(customerId, customerData, session);
            await session.commitTransaction();
            return customer;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteCustomer(customerId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await customerRepository.deleteCustomer(customerId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new CustomerService();

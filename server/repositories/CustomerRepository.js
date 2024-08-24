const Customer = require('../models/Customer');

class CustomerRepository {
    async createCustomer(customerData, session) {
        const customer = new Customer(customerData);
        return await customer.save({ session });
    }

    async getAllCustomers() {
        return await Customer.find();
    }

    async getCustomerById(customerId) {
        return await Customer.findById(customerId);
    }

    async updateCustomer(customerId, customerData, session) {
        return await Customer.findByIdAndUpdate(customerId, customerData, { new: true, session });
    }

    async deleteCustomer(customerId, session) {
        return await Customer.findByIdAndDelete(customerId, { session });
    }
}

module.exports = new CustomerRepository();

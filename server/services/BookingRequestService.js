const bookingRequestRepository = require('../repositories/BookingRequestRepository');
const mongoose = require('mongoose');

class BookingRequestService {
    async createBookingRequest(bookingRequestData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const bookingRequest = await bookingRequestRepository.createBookingRequest(bookingRequestData, session);
            await session.commitTransaction();
            return bookingRequest;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllBookingRequests() {
        return await bookingRequestRepository.getAllBookingRequests();
    }

    async getBookingRequestById(bookingRequestId) {
        return await bookingRequestRepository.getBookingRequestById(bookingRequestId);
    }

    async updateBookingRequest(bookingRequestId, bookingRequestData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const bookingRequest = await bookingRequestRepository.updateBookingRequest(bookingRequestId, bookingRequestData, session);
            await session.commitTransaction();
            return bookingRequest;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteBookingRequest(bookingRequestId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await bookingRequestRepository.deleteBookingRequest(bookingRequestId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new BookingRequestService();

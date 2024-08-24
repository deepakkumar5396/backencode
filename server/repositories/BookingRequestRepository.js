const BookingRequest = require('../models/BookingRequest');

class BookingRequestRepository {
    async createBookingRequest(bookingRequestData, session) {
        const bookingRequest = new BookingRequest(bookingRequestData);
        return await bookingRequest.save({ session });
    }

    async getAllBookingRequests() {
        return await BookingRequest.find();
    }

    async getBookingRequestById(bookingRequestId) {
        return await BookingRequest.findById(bookingRequestId);
    }

    async updateBookingRequest(bookingRequestId, bookingRequestData, session) {
        return await BookingRequest.findByIdAndUpdate(bookingRequestId, bookingRequestData, { new: true, session });
    }

    async deleteBookingRequest(bookingRequestId, session) {
        return await BookingRequest.findByIdAndDelete(bookingRequestId, { session });
    }
}

module.exports = new BookingRequestRepository();

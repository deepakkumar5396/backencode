const bookingRequestService = require('../services/BookingRequestService');

class BookingRequestController {
    async createBookingRequest(req, res, next) {
        try {
            const bookingRequestData = req.body;
            const bookingRequest = await bookingRequestService.createBookingRequest(bookingRequestData);
            res.status(201).json(bookingRequest);
        } catch (error) {
            next(error);
        }
    }

    async getAllBookingRequests(req, res, next) {
        try {
            const bookingRequests = await bookingRequestService.getAllBookingRequests();
            res.status(200).json(bookingRequests);
        } catch (error) {
            next(error);
        }
    }

    async getBookingRequestById(req, res, next) {
        try {
            const bookingRequestId = req.params.id;
            const bookingRequest = await bookingRequestService.getBookingRequestById(bookingRequestId);
            res.status(200).json(bookingRequest);
        } catch (error) {
            next(error);
        }
    }

    async updateBookingRequest(req, res, next) {
        try {
            const bookingRequestId = req.params.id;
            const bookingRequestData = req.body;
            const bookingRequest = await bookingRequestService.updateBookingRequest(bookingRequestId, bookingRequestData);
            res.status(200).json(bookingRequest);
        } catch (error) {
            next(error);
        }
    }

    async deleteBookingRequest(req, res, next) {
        try {
            const bookingRequestId = req.params.id;
            await bookingRequestService.deleteBookingRequest(bookingRequestId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new BookingRequestController();

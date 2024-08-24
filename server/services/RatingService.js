const ratingRepository = require('../repositories/RatingRepository');
const mongoose = require('mongoose');

class RatingService {
    async createRating(ratingData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const rating = await ratingRepository.createRating(ratingData, session);
            await session.commitTransaction();
            return rating;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async getAllRatings() {
        return await ratingRepository.getAllRatings();
    }

    async getRatingById(ratingId) {
        return await ratingRepository.getRatingById(ratingId);
    }

    async updateRating(ratingId, ratingData) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const rating = await ratingRepository.updateRating(ratingId, ratingData, session);
            await session.commitTransaction();
            return rating;
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }

    async deleteRating(ratingId) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            await ratingRepository.deleteRating(ratingId, session);
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new RatingService();

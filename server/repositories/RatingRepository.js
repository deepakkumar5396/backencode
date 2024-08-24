const Rating = require('../models/Rating');

class RatingRepository {
    async createRating(ratingData, session) {
        const rating = new Rating(ratingData);
        return await rating.save({ session });
    }

    async getAllRatings() {
        return await Rating.find();
    }

    async getRatingById(ratingId) {
        return await Rating.findById(ratingId);
    }

    async updateRating(ratingId, ratingData, session) {
        return await Rating.findByIdAndUpdate(ratingId, ratingData, { new: true, session });
    }

    async deleteRating(ratingId, session) {
        return await Rating.findByIdAndDelete(ratingId, { session });
    }
}

module.exports = new RatingRepository();

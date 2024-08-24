const ratingService = require('../services/RatingService');

class RatingController {
    async createRating(req, res, next) {
        try {
            const ratingData = req.body;
            const rating = await ratingService.createRating(ratingData);
            res.status(201).json(rating);
        } catch (error) {
            next(error);
        }
    }

    async getAllRatings(req, res, next) {
        try {
            const ratings = await ratingService.getAllRatings();
            res.status(200).json(ratings);
        } catch (error) {
            next(error);
        }
    }

    async getRatingById(req, res, next) {
        try {
            const ratingId = req.params.id;
            const rating = await ratingService.getRatingById(ratingId);
            res.status(200).json(rating);
        } catch (error) {
            next(error);
        }
    }

    async updateRating(req, res, next) {
        try {
            const ratingId = req.params.id;
            const ratingData = req.body;
            const rating = await ratingService.updateRating(ratingId, ratingData);
            res.status(200).json(rating);
        } catch (error) {
            next(error);
        }
    }

    async deleteRating(req, res, next) {
        try {
            const ratingId = req.params.id;
            await ratingService.deleteRating(ratingId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RatingController();

// controllers/cities.js

const { errorRespose } = require("../helper/utils");
const { cities, provinces } = require("../models");

module.exports = {
    getAllCities: async (req, res, next) => {
        try {
            const result = await cities.findAll({
                include: [
                    {
                        model: provinces,
                        as: 'province',
                        attributes: ['name']
                    }
                ]
            });

            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Cities not found"));
            }

            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    }
};

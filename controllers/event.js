const { errorRespose } = require("../helper/utils");
const { categories, provinces, cities } = require("../models");

module.exports = {
    getAllEvents: async (req, res, next) => {
        try {
            const result = await events.findAll();
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const result = await service_name.create(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },

    getCategories: async (req, res, next) => {
        try {
            const result = await categories.findAll();
            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Categories not found"));
            }
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },

    getProvinces: async (req, res, next) => {
        try {
            const result = await provinces.findAll();
            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Categories not found"));
            }
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },

    getCities: async (req, res, next) => {
        try {
            const result = await cities.findAll(
                {
                    where: {
                        provId: req.params.id
                    },
                    include: [
                        {
                            model: provinces,
                            as: 'province',
                            attributes: ['name']
                        }
                    ]
                }
            );
            
            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Categories not found"));
            }
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
};
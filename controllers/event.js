const { errorRespose } = require("../helper/utils");
const { categories, provinces, cities, ticket_types, events } = require("../models");
const fs = require("fs");

module.exports = {
    create: async (req, res, next) => {
        try {
            console.log("REQ", req);
            if (req.file) {
                const result = await events.create({ ...req.body, image: req.file.path });
                // console.log("result create event:", result);
                return res.status(200).json(result);
            }
            // const result = { ...req.body };
            const result = await events.create(req.body);

            // console.log(result);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            fs.unlinkSync(`${req.file.path}`);
            next(errorRespose(500, false, error.message, error.stack));
        }
    },

    getCategories: async (req, res, next) => {
        try {
            const result = await categories.findAll({
                attributes: ['id', 'name']
            });
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
            const result = await provinces.findAll({
                attributes: ['id', 'name']
            });
            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Provinces not found"));
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
                    attributes: ['id', ['name', 'city']],
                    where: {
                        provId: req.params.id
                    },
                    include: [
                        {
                            model: provinces,
                            as: 'province',
                            attributes: ['name'],
                            required: true
                        }
                    ]
                }
            );

            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Cities not found"));
            }
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },

    getTicketTypes: async (req, res, next) => {
        try {
            const result = await ticket_types.findAll({
                attributes: ['id', 'type']
            });
            if (!result) {
                return next(errorRespose(404, false, "Not Found", "Ticket Types not found"));
            }
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    }
};
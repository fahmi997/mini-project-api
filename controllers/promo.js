const { errorRespose } = require("../helper/utils");
const { inventories, ticket_types, events, promos } = require("../models");

module.exports = {
    getEvent: async (req, res, next) => {
        try {
            const result = await inventories.findAll({
                include: [
                    {
                        model: events,
                        required: true,
                        where: {
                            userId: req.body.userId
                        }
                    },
                    {
                        model: ticket_types,
                        required: true,
                    }
                ]
            })
            return res.status(200).json(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    getAllData: async (req, res, next) => {
        try {
            const result = await promos.findAll({
                include: [
                    {
                        model: events,
                        required: true,
                    },
                    {
                        model: ticket_types,
                        required: true,
                    }
                ]
            });
            return res.status(200).json(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    create: async (req, res, next) => {
        try {
            const result = await promos.create(req.body);
            return res.status(200).json(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    delete: async (req, res, next) => {
        try {
            // console.log(req.params.id);
            const result = await promos.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    update: async (req, res, next) => {
        try {
            // console.log("params", req.params.id);
            // console.log("body", req.body);
            const result = await promos.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    
}
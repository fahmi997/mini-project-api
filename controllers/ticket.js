const { errorRespose } = require("../helper/utils");
const { inventories } = require("../models");

module.exports = {
    create: async (req, res, next) => {
        try {
            // const result = req.body;
            const result = await inventories.bulkCreate(req.body);
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            next(errorRespose(500, false, error.message, error.stack));
        }
    },
    getAll: async (req, res, next) => {
        try {
            const result = await inventories.findAll()
            return res.status(200).send(result)
        } catch (error) {
            next(errorRespose(500, false, error.message, error))
        }
    }
}
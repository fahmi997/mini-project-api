module.export = {
    create: async (req, res, next) => {
        try {
            const result = await service_name.create(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
};
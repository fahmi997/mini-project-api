const { cityController } = require('../controllers')

const router = require('express').Router();

router.get("/", cityController.getAllCities)

module.exports = router;
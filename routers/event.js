const { eventController } = require('../controllers')

const router = require('express').Router();

router.get('/categories', eventController.getCategories)
router.get('/provinces', eventController.getProvinces)
router.get('/cities/:id', eventController.getCities)
router.get('/ticket-types', eventController.getTicketTypes)

module.exports = router;
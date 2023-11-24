const { eventController } = require('../controllers')

const router = require('express').Router();

router.get('/', eventController.getAllEvents)
router.get('/categories', eventController.getCategories)
router.get('/provinces', eventController.getProvinces)
router.get('/cities/:id', eventController.getCities)
router.get('/:id', eventController.getEventById)

module.exports = router;
const { eventController } = require('../controllers');
const { uploader } = require('../helper/uploader');

const router = require('express').Router();

router.get('/', eventController.getAllEvents)
router.get('/categories', eventController.getCategories)
router.get('/provinces', eventController.getProvinces)
router.get('/cities/:id', eventController.getCities)
router.get('/ticket-types', eventController.getTicketTypes)
router.get('/:id', eventController.getEventById)
router.post('/create', uploader('/events').single('image'), eventController.create)
router.get('/all/:id', eventController.getAllData)
router.delete('/delete/:id', eventController.delete)

module.exports = router;
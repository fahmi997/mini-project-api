const { eventController } = require('../controllers');
const { uploader } = require('../helper/uploader');

const router = require('express').Router();

router.get('/categories', eventController.getCategories)
router.get('/provinces', eventController.getProvinces)
router.get('/cities/:id', eventController.getCities)
router.get('/ticket-types', eventController.getTicketTypes)
// router.post('/create', eventController.create)
router.post('/create', uploader('/events').single('image'), eventController.create)
router.get('/all/:id', eventController.getAllData)
router.delete('/delete/:id', eventController.delete)

module.exports = router;
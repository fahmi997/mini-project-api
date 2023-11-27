const { ticketController } = require('../controllers')

const router = require('express').Router();

router.post('/create', ticketController.create)
router.get('/', ticketController.getAll)

module.exports = router;
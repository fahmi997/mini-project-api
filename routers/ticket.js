const { ticketController } = require('../controllers')

const router = require('express').Router();

router.post('/create', ticketController.create)

module.exports = router;
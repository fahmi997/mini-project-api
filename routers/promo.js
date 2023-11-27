const { promoController } = require('../controllers');

const router = require('express').Router();

router.post('/event', promoController.getEvent);
router.post('/create', promoController.create);
router.get('/all', promoController.getAllData);
router.delete('/delete/:id', promoController.delete);
router.patch('/update/:id', promoController.update);

module.exports = router;
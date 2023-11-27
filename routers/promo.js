const { promoController } = require('../controllers');

const router = require('express').Router();

router.get('/event/:id', promoController.getEvent);
router.post('/create', promoController.create);
router.get('/all/:id', promoController.getAllData);
router.delete('/delete/:id', promoController.delete);
router.patch('/update/:id', promoController.update);

module.exports = router;
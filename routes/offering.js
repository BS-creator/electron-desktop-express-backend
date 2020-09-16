var express = require('express');
var router = express.Router();
var OfferingsController = require('../controllers/offerings');

router.get('/', OfferingsController.index);
router.post('/', OfferingsController.store);
router.put('/:offeringId', OfferingsController.update);
router.delete('/:offeringId', OfferingsController.destroy);

module.exports = router;
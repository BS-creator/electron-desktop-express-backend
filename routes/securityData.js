var express = require('express');
var router = express.Router();
var OfferingsController = require('../controllers/securityDatas');

router.get('/', OfferingsController.index);
router.post('/', OfferingsController.store);
router.put('/:securityDataId', OfferingsController.update);
router.delete('/:securityDataId', OfferingsController.destroy);

module.exports = router;
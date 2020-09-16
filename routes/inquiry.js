var express = require('express');
var router = express.Router();
var InquiriesController = require('../controllers/inquiries');

router.get('/', InquiriesController.index);
router.post('/', InquiriesController.store);
router.put('/:inquiryId', InquiriesController.update);
router.delete('/:inquiryId', InquiriesController.destroy);

module.exports = router;
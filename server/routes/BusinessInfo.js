const express = require('express');
const router = express.Router();
const { BusinessList, BusinessInfo, makeInvestment } = require('../controllers/BusinessList');
const {is_auth} = require('../middleware/middleware');
router.get('/', BusinessList);
router.get('/:id/', BusinessInfo);
router.post('/:id/', is_auth,makeInvestment);

module.exports = router;
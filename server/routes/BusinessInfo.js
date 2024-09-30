const express = require('express');
const router = express.Router();
const { BusinessList, BusinessInfo, makeInvestment } = require('../controllers/BusinessList')

router.get('/', BusinessList);
router.get('/:id/', BusinessInfo)
router.post('/:id/', makeInvestment)

module.exports = router;

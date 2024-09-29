const express = require('express');
const router = express.Router();
const { BusinessList, BusinessInfo } = require('../controllers/BusinessList')

router.get('/', BusinessList);
router.get('/:id/', BusinessInfo)

module.exports = router;

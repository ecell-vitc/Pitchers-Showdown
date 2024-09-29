const express = require('express');
const router = express.Router();
const { BusinessList } = require('../controllers/BusinessList')

router.get('/businessList', BusinessList);

module.exports = router;

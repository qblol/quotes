var express = require('express');
var router = express.Router();
var QuoteController = require('../controllers/QuoteController.js');

/* GET home page. */
router.get('/', QuoteController.random);

module.exports = router;

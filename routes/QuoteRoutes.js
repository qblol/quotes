var express = require('express');
var router = express.Router();
var QuoteController = require('../controllers/QuoteController.js');

/*
 * GET
 */
router.get('/', QuoteController.list);

/*
 * GET
 */
router.get('/random', QuoteController.random);

/*
 * GET
 */
router.get('/:id', QuoteController.show);

/*
 * POST
 */
router.post('/', QuoteController.create);

/*
 * PUT
 */
router.put('/:id', QuoteController.update);

/*
 * DELETE
 */
router.delete('/:id', QuoteController.remove);

module.exports = router;

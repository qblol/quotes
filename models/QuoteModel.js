var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var QuoteSchema = new Schema({
	'timestamps' : true
});

module.exports = mongoose.model('Quote', QuoteSchema);
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var QuoteSchema = new Schema({	'content' : String,	'author'	: String},{
	'timestamps' : true
});

module.exports = mongoose.model('Quote', QuoteSchema);

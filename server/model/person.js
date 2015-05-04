var mongoose = require('mongoose');

var Person = mongoose.model('Person', { 
	name: String,
	email: String,
	gender: String,
	phone: String,
	hash: String
});

module.exports = Person;
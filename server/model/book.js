var mongoose = require('mongoose');

var Book = mongoose.model('Book', { 
	name: String,
	author_name: String,
	category_id: Number,
	quantity_in_stock: Number,
	hash: String
});

module.exports = Book;
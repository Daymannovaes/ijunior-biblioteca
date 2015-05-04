var BookController = {};
var Book = require('../model/book');
var crypto = require('crypto');

var Hash = function() {
	var current_date = (new Date()).valueOf().toString();
	return crypto.createHash('sha1').update(current_date).digest('hex');
};

BookController.post = function(req, res) {
	console.log("post to /book: ", req.body);

	if(!req.body || !req.body.name || !req.body.author_name) {
		res.sendStatus(400);
		return;
	}


	req.body.quantity_in_stock = parseInt(req.body.quantity_in_stock) || 0;
	req.body.category_id = req.body.category_id || 0;
	
	var hash = Hash();
	var book = new Book({
		name: req.body.name,
		author_name: req.body.author_name,
		category_id: req.body.category_id,
		quantity_in_stock: req.body.quantity_in_stock,
		hash: hash
	});
	
	book.save(function(err) {
		if (err) {
			res.status(500).send('database');
			return;
		}

		res.status(200).send(hash);
	});
};

BookController.count = function(req, res) {
	Book.count({}, function (err, count) {
		if (err) {
			res.status(500).send('database');
			return;
		}

		res.send(count + "");
	});
};

BookController.put = function(req, res) {	
	res.send('user ' + req.params.hash);
};

BookController.delete = function(req, res) {	
	res.send('user ' + req.params.hash);
};

BookController.get = function(req, res) {	
	res.send('user ' + req.params.hash);
};

module.exports = BookController;
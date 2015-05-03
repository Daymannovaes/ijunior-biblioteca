var Book = {};

Book.post = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Book.put = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Book.delete = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Book.get = function(req, res) {	
	res.send('user ' + req.params.hash);
};

module.exports = Book;
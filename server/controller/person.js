var Person = {};

Person.post = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Person.put = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Person.delete = function(req, res) {	
	res.send('user ' + req.params.hash);
};

Person.get = function(req, res) {	
	res.send('user ' + req.params.hash);
};

module.exports = Person;
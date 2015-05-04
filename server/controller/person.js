var PersonController = {};
var Person = require('../model/person');
var crypto = require('crypto');

var Hash = function() {
	var current_date = (new Date()).valueOf().toString();
	return crypto.createHash('sha1').update(current_date).digest('hex');
};


PersonController.post = function(req, res) {	
	console.log("post to /person: ", req.body);


	if(!req.body || !req.body.name || !req.body.email || !req.body.gender) {
		res.sendStatus(400);
		return;
	}

	Person.findOne({email: req.body.email}, function(err, person) {
		if(!person) {
			req.body.phone = req.body.phone || '';
	
			var hash = Hash();
			person = new Person({
				name: req.body.name,
				email: req.body.email,
				gender: req.body.gender,
				phone: req.body.phone,
				hash: hash
			});
			
			person.save(function(err) {
				if (err) {
					res.sendStatus(501);
					return;
				}

				res.status(200).send(hash);
			});
		}
		else {
			res.sendStatus(403);
		}
	});
};

PersonController.count = function(req, res) {
	Person.count({}, function (err, count) {
		if (err) {
			res.status(500).send('database');
			return;
		}

		res.send(count + "");
	});
};

PersonController.put = function(req, res) {	
	res.send('user ' + req.params.hash);
};

PersonController.delete = function(req, res) {	
	res.send('user ' + req.params.hash);
};

PersonController.get = function(req, res) {	
	res.send('user ' + req.params.hash);
};

module.exports = PersonController;
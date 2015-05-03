var controller = require('./controller/index');

var Route = function(app, express) {	

	app.use('/public', express.static(__dirname + "/../assets"));

	app.get('/', function(req, res) {
		res.sendFile('index.html', {root: __dirname + "/../"});
	});

	app.post('/book', controller.book.post);
	app.route('/book/:hash')
		.get(controller.book.get)
		.put(controller.book.put)
		.delete(controller.book.delete);
	
	app.post('/person', controller.person.post);
	app.route('/person/:hash')
		.get(controller.person.get)
		.put(controller.person.put)
		.delete(controller.person.delete);
	
};

module.exports = Route;
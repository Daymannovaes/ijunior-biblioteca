(function($public) {
	'use strict';

	var request = function(method, url, data, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);

		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function() {
			if(this.readyState == 4) {
				callback.call(this, this.responseText, this.status);
			}
		};

		xhr.send(JSON.stringify(data));
	};

	$public.$http = {};

	$public.$http.post = function(url, data, callback) {
		request('POST', url, data, callback);
	};
	$public.$http.put = function(url, data, callback) {
		request('PUT', url, data, callback);
	};
	$public.$http.get = function(url, callback) {
		request('GET', url, null, callback);
	};
	$public.$http.delete = function(url, callback) {
		request('DELETE', url, null, callback);
	};
})(window);



(function($public) {
	'use strict';

	var count = document.getElementById("count");

	$public.refresh = function() {
		$http.get('/book/count', function(book, status) {
			if(status == 200) {
				$http.get('/person/count', function(person, status) {
					if(status == 200) {
						count.innerHTML = " (" + book + " livros e " + person + " pessoas cadastradas)";
					}
				})
			}
		});
	};
})(window);

refresh();
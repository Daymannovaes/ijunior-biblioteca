(function() {
	var isBook = true;
	var peopleForm = document.getElementById("people");
	var bookForm = document.getElementById("book");
	
	var peopleBtn = document.getElementById("btn-people");
	var bookBtn = document.getElementById("btn-book");

	peopleBtn.onclick = function() {
		if(isBook) {
			bookForm.style.display = "none";
			peopleForm.style.display = "block";
			isBook = false;		
		}
	}
	bookBtn.onclick = function() {
		if(!isBook) {
			bookForm.style.display = "block";
			peopleForm.style.display = "none";
			isBook = true;		
		}
	}

})();

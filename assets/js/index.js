(function() {
	'use strict';

	var isBook = true;
	var peopleForm = document.getElementById("people");
	var bookForm = document.getElementById("book");
	
	var peopleBtn = document.getElementById("btn-people");
	var bookBtn = document.getElementById("btn-book");

	peopleBtn.onclick = function() {
		if(isBook) {
			bookBtn.className = bookBtn.className.replace("active", "");
			peopleBtn.classList.add("active");

			bookForm.style.display = "none";
			peopleForm.style.display = "block";
			isBook = false;		
		}
	}
	bookBtn.onclick = function() {
		if(!isBook) {
			peopleBtn.className = peopleBtn.className.replace("active", "");
			bookBtn.classList.add("active");

			bookForm.style.display = "block";
			peopleForm.style.display = "none";
			isBook = true;		
		}
	}
})();

(function($public) {
	var ul = document.querySelector("#msgs ul");

	var span = document.querySelector("#msgs span");

	var li = function(text) {
		var r = document.createElement("li");
		r.innerHTML = text;

		return r;
	}

	$public.clearMsgs = function() {
		ul.innerHTML = "";
		span.innerHTML = "Aqui ficam as mensagens do formulário";
	};
	$public.showMsg = function(msg) {
		span.innerHTML = "";
		ul.appendChild(li(msg));
	};
})(window);

(function() {
	'use strict';

	var trySubmit = function(form) {
		if(!form.name.value || form.name.value.length == 0) {
			form.name.style.outline = "5px auto #F44";
			showMsg("Seu nome precisa ser preenchido");
		}
		else {
			form.name.style.outline = "0px";
		}
		if(!form.email.value || !form.email.value.match(/^[a-zA-Z0-9][a-zA-Z0-9._]*@[a-zA-Z0-9][a-zA-Z0-9-_]*[.][a-zA-Z]+$/)) {
			form.email.style.outline = "5px auto #F44";
			showMsg("Email inválido");
		}
		else {
			form.email.style.outline = "0px";
		}
		if(!form.gender.value || (!form.gender[0].checked && !form.gender[1].checked)) {
			form.gender[0].parentElement.style.outline = "5px auto #F44";
			showMsg("Escolha seu sexo");
		}
		else {
			form.gender[0].parentElement.style.outline = "0px";
		}
		if(form.phone.value.match(/[^0-9]/)) {
			form.phone.style.outline = "5px auto #F44";
			showMsg("O telefone não pode conter letras");
		}
		else {
			form.phone.style.outline = "0px";
		}

		if(!document.querySelector("#msgs ul li"))
			doSubmit();
	};

	var doSubmit = function() {
		//post ajax
		console.log("pessoa cadastrada (mentira)");
	};

	document.querySelector("#people form").onsubmit = function(e) {
		e.preventDefault();

		clearMsgs();

		trySubmit(this);
	};
})();

(function() {
	'use strict';

	var trySubmit = function(form) {
		if(!form.title.value || form.title.value.length == 0) {
			form.title.style.outline = "5px auto #F44";
			showMsg("O livro precisa de um título");
		}
		else {
			form.title.style.outline = "0px";
		}
		if(!form.author.value || form.author.value.length == 0) {
			form.author.style.outline = "5px auto #F44";
			showMsg("O livro precisa de um autor também");
		}
		else {
			form.author.style.outline = "0px";
		}
		if(!form.editor.value || form.editor.value.length == 0) {
			form.editor.style.outline = "5px auto #F44";
			showMsg("Qual a editora?");
		}
		else {
			form.editor.style.outline = "0px";
		}

		if(!document.querySelector("#msgs ul li"))
			doSubmit();
	};

	var doSubmit = function() {
		//post ajax

		console.log("livro cadastrado (mentira)");
	};


	document.querySelector("#book form").onsubmit = function(e) {
		e.preventDefault();

		clearMsgs();

		trySubmit(this);	
	};
})();
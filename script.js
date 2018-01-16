window.onload = function(){


	var buttons = ["small","medium","large","xlarge"];

	buttons.forEach(function(name, index){

		document.querySelector("body").insertAdjacentHTML(
			"beforeend",
			`<div class='manipulator' id=${name} />`
		);

	});

	document.querySelectorAll(".manipulator").forEach(function(element, index){

		element.addEventListener("click", function(){
			buttons.forEach(function(name, index){
				document.querySelector("body").classList.remove(name)
			})
			document.querySelector("body").classList.add(element.id)
		});

	});

};

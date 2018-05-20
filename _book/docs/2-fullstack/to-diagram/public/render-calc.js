function render_calc() {
	let container = document.getElementById("container");

	// delete everything in the div
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}

	// build input field
	let input_div = document.createElement("div");
	input_div.setAttribute("class", "box");

	let input_1 = document.createElement("input");
	input_1.setAttribute("type", "text");
	input_1.setAttribute("id", "number1");

	let input_2 = document.createElement("input");
	input_2.setAttribute("type", "text");
	input_2.setAttribute("id", "number2");

	let input_button = document.createElement("button");
	input_button.setAttribute("type", "button");
	input_button.setAttribute("id", "addButton");
	input_button.setAttribute("class", "btn btn-light");
	input_button.innerHTML = "+";

	input_div.appendChild(input_1);
	input_div.appendChild(input_button);
	input_div.appendChild(input_2);


	// build output box
	let output_div = document.createElement("div");
	output_div.setAttribute("class", "box");
	output_div.setAttribute("id", "output");

	// build whole component
	container.appendChild(input_div);
	container.appendChild(output_div);

	// set event listener on new dom elements
	let addButton = document.getElementById("addButton");
	addButton.addEventListener("click", add_handler);
}




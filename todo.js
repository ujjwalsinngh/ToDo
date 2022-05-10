function submit(){

	var task = document.getElementById("searchBox").value;

	let list = document.getElementById("taskList");
	let li = document.createElement("li");

	var x = document.createElement('input');

	x.setAttribute("type", "radio");
	x.setAttribute("value", task);
	x.setAttribute("name", "listRadios");

	var button = document.createElement("input");

	button.setAttribute("type", "button");
	button.id = 'remove';
	button.value = '-';
	button.name = 'remove';

	// $("#delete").html('<input type="button" value="-" id="remove1" />');
	

	li.append(x, x.value, button);
	list.appendChild(li);

	/to find the length of the list/
	const elements = document.getElementById("taskList");
	let len = elements.childNodes.length;
	document.getElementById("length").innerHTML = len;


					// li.append(len);



					// ${'#remove'}.hide();
					// $("#taskList").hover(function(){
					// 	$("#remove").show();
					// });

					// list.forEach((item, i) => {
					// 	var listItem = document.createElement('label');
					// 	listItem.innerHTML = item;
					// 	document.body.appendChild(listItem);
					// });

}

// $(#remove).on("click", "#remove1", function(){
// 		document.getElementById("taskList").remove();
// });

$(document).ready(function(){
	$(document).on("click", "", function(){
		$(this).remove();
	});
});


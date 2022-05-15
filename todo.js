function submit(){

	var task = document.getElementById("searchBox").value;

	/to create new list on the basis of Id from HTML <div>/
	let list = document.getElementById("taskList");

	/to create list Item/
	let listItem = document.createElement("li");


	/to generate manual Id in order to differentiate Ids of all list items/
	const elementsForManualId = document.getElementById("taskList");
	let initialLength = elementsForManualId.childNodes.length;
	let manualId = task + initialLength;


	/current list item's id/
	listItem.id = manualId;


	/to create a radio button at run-time (dynamically) & set it's properties/
	var radioButton = document.createElement('input');
	radioButton.setAttribute("type", "radio");                       /by using "setAttribute()" method /
	radioButton.id = 'radio';                                        /by using function followed by property name/
	radioButton.setAttribute("value", task);
	radioButton.setAttribute("name", 'radioButton');

	var currLabel = document.createElement("label");
	currLabel.id = "label"
	currLabel.name = manualId;
	currLabel.value = task;


	/to create delete button at run-time (dynamically) & set it's properties/
	var deleteButton = document.createElement("input");
	deleteButton.setAttribute("type", "button");
	deleteButton.id = 'remove';
	deleteButton.value = '-';
	deleteButton.name = manualId;



	/to append values to listItem/
	listItem.append(radioButton, currLabel.value, deleteButton);

	/to append list Item to list/
	list.appendChild(listItem);

	/to check a radio button corresponding to clicked list item/
	listItem.onclick = function() {
		radioButton.checked = true;
		var rad = radioButton.value;
		rad.style.color: "black";
	}


	deleteButton.onclick = function() {
		/to remove <li> from the list on the basis of id (manual Id)/
		document.getElementById(deleteButton.name).remove();

		/to update "n tasks left" footer/
		const elementsForLength = document.getElementById("taskList");
		let len = elementsForLength.childNodes.length;
		document.getElementById("length").innerHTML = len;
	};


	/to find the length of the list/
	const elementsForLength = document.getElementById("taskList");
	let len = elementsForLength.childNodes.length;
	
	document.getElementById("length").innerHTML = len;

}


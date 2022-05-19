function submit(){

	var task = document.getElementById("searchBox").value;

	/to clear the input field after submit/
	document.getElementById('searchBox').value = '';

	/to create new list on the basis of Id from HTML <div>/
	let list = document.getElementById("taskList");

	/to create list Item/
	let listItem = document.createElement("li");


	/to generate manual Id in order to differentiate Ids of all list items/
	// const elementsForManualId = document.getElementById("taskList");
	// let initialLength = elementsForManualId.childNodes.length;
	// let manualId = task + initialLength;
	let manualId = Math.random();


	/current list item's id/
	listItem.id = manualId;


	/to create a radio button at run-time (dynamically) & set it's properties/
	var radioButton = document.createElement('input');
	radioButton.setAttribute("type", "radio");                       /by using "setAttribute()" method /
	radioButton.id = 'radio';                                        /by using function followed by property name/
	radioButton.setAttribute("value", task);
	radioButton.setAttribute("name", manualId);                 /must be same for all radio buttons to ensure only one checked radio button at a time/
																// / here name of radio buttons are different in order to achieve checking and unchecking on the basis of current checked radio button/  

	var currLabel = document.createElement("label");
	currLabel.id = "label"
	currLabel.name = manualId;
	currLabel.value = task;


	/to create delete button at run-time (dynamically) & set it's properties/
	var deleteButton = document.createElement("input");
	deleteButton.setAttribute("type", "button");
	deleteButton.id = 'remove';
	deleteButton.value = '-'
	deleteButton.name = manualId;



	/to append values to listItem/
	listItem.append(radioButton, currLabel.value, deleteButton);


	/to append list Item to list/
	list.appendChild(listItem);


	/to store the current checked radio button/
	var currChecked = manualId;

	/to toggle for click on delete button /
	var flag = false;

	/to check & uncheck a radio button corresponding to clicked list item and update & reset it's style/
	listItem.onclick = function() {

		/if flag is false, means no click on any delete button/
		if(!flag){
			var list = document.getElementById('taskList').children;
		
			for(var i=0; i<list.length; i++){

				var item = list[i];
				var rad = document.querySelectorAll('#radio');
				var currRadio = rad[i];

				if(item.id == listItem.id){

					currRadio.checked = true;
					currRadio.parentElement.style.color = "white";
					currRadio.parentElement.style.backgroundColor = "black";
					currChecked = radioButton;
				
				}else if(item.id != listItem.id){

					currRadio.checked = false; 
					currRadio.parentElement.style.color = "black";
					currRadio.parentElement.style.backgroundColor = "#ebedeb";

				}
			}	
		}else{   / if flag is true, means it came here after click on delete button and don't store current checked radio button coz it'll store the radio button of clicked list item as delete button is the part of clicked list item/
			flag = false;
		}
	}


	// / to delete clicked list item/
	deleteButton.onclick = function() {
		/to remove <li> from the list on the basis of id (manual Id)/
		document.getElementById(deleteButton.name).remove();

		/to check last checked radio button/
		currChecked.checked = true;

		/to toggle that delete button is clicked/
		flag = true;

		/to update "n tasks left" footer/
		const elementsForLength = document.getElementById("taskList");
		let len = elementsForLength.childNodes.length;
		document.getElementById("length").innerHTML = len;
	};


	/to find the length of the list/
	const elementsForLength = document.getElementById("taskList");
	let len = elementsForLength.childNodes.length;
	
	/to update "tasks left" section in footer/
	document.getElementById("length").innerHTML = len;

}


  var testObject = { 
	firstName: "Richard",
	lastName: "Doe",
	age:30
	};
	
	
	localStorage.userObject = JSON.stringify(testObject);
	
	var storedObject = JSON.parse(localStorage.userObject);
	var stringObject = localStorage.userObject;
	
	document.writeln(storedObject);
	document.writeln(stringObject);
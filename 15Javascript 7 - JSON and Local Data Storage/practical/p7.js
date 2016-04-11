   var testObject = { 
	firstName: "Richard",
	lastName: "Doe",
	age:30
	};
	
	
	localStorage.t = JSON.stringify(testObject);
	
	
	if(localStorage.t != null)
	{
		document.writeln("welcome back");
	}
	else
	{
		document.writeln("welcome");
	}
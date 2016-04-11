
 var nameJSON = JSON.parse(data);

 for(var i =0; i < nameJSON.length; i++)
 {	
	 document.writeln(nameJSON[i].name);
	 document.writeln("<br>");
 }
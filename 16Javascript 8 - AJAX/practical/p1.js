 
 
 
 
 var returnString;
 
 
 
 
 function ajaxRequest() {
  var httpRequestInstance = new XMLHttpRequest();
  httpRequestInstance.onreadystatechange = function() {
    if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) {
      
	  var returnObject = JSON.parse(httpRequestInstance.responseText);
	
	 var inputString = document.getElementById("userInputText").value;
	  
	 
	  document.getElementById("output").innerHTML = searchJSONObject( inputString,returnObject);
    }
  };
  var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical2/athletes.json";
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
}


function searchJSONObject(searchString,jsonObject)
{
	var returnString = searchString + " " + jsonObject[searchString];
	
	return returnString;
	
}




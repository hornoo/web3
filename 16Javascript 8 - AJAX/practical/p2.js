
var einput;

var returnedAjaxObject

function buttonClicked(e)
{
	
var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical/images/" + e.id + ".svg";
	

 var httpRequestInstance = new XMLHttpRequest();
 
  httpRequestInstance.onreadystatechange = function() {
    if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) {
      
	  returnedAjaxObject = httpRequestInstance.responseText;
	  
	 var outputDiv = "icon" + e.id.slice(6);
	 
	 document.getElementById(outputDiv).innerHTML = returnedAjaxObject;
	 
	 console.log(outputDiv);
	  
    }
  };
  
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
	
}
 
 var outputString;
 
 
 function numberDetect(inputString)
 {
	 var regexp = /(\d+)/g;
	 
	 outputString = inputString.match(regexp); 
	 
	 return outputString;
 }
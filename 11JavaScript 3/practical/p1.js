
 
 
 function countDown(input)
 {
	 
	 var returnValue = "";
	 
	 for(var i = input; i > 0; i--)
	 {
		 returnValue += i + " ";
	 }
	 
	 return returnValue;
 }
 
 

 
 var inputNumber = prompt("enter number");
 
 
	 
 var elementToUpdate = document.getElementById("divDisplay");

 elementToUpdate.innerHTML = countDown(inputNumber);
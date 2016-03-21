function randomNumArray(lengthOfArray)
{
	var returnArray =  new Array();
	
	for(var i = 0; i < lengthOfArray; i++)
	{
		returnArray[i] = randomNumber(10);
	}
	
	return returnArray
	
}

function twoDRandomNumberArray(lenghtOfArray,widthOfArray)
{
	var returnArray = [];
	
	for(var i = 0; i < lenghtOfArray; i++)		
	{

		
		returnArray[i] = randomNumArray(widthOfArray);
	}
	
	return returnArray;
}

function showArray()
{
	var testarray = twoDRandomNumberArray(10,10);
	
	for(var i=0;i<testarray.length;i++)
	{
		console.log(testarray[i]);
	}
}


 function randomNumber(numberRange)
 {
	 returnValue = Math.floor(Math.random() * numberRange);
	 
	 
	 return returnValue;
 }
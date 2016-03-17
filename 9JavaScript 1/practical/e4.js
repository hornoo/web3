
var inputNumber = prompt();


//recursive function
function factoralCal(m){
	
	if(m === 1)
	{
		return 1;
	}
	
	else
	{
		return m * (factoralCal(m-1));
	}
}

//console.log(factoralCal(inputNumber));

document.write(factoralCal(inputNumber));
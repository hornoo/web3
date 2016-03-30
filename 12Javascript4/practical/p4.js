

function ChangeClassOnMouseover(e)
{
	
	var pElement = e.target;
	pElement.className = "underline";
	console.log('mouseover event');
	
}


function ChangeClassOnMouseout(e)
{
	
	var pElement = e.target;
	pElement.className = "";
	console.log('mouseover event');
	
}

function showMouseCorod(e)
{
	alert('mouse X ' + e.clientX + " Y " + e.clientY );
	
	e.clientX
}


document.addEventListener('click', showMouseCorod);

var ptagArray = document.getElementsByTagName('p');

for(var i =0; i < ptagArray.length; i++){
	
	ptagArray[i].addEventListener('mouseover', ChangeClassOnMouseover);
	ptagArray[i].addEventListener('mouseout', ChangeClassOnMouseout);
}








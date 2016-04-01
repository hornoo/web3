 
var mainCanvis;
var mainContext; 


function init()
{	 
mainCanvis = document.getElementById("canvas");
mainContext = mainCanvis.getContext("2d");

drawSun();
	
}



function animateWorld()
{
	
	
}

function drawSun()
{
	var grd = mainContext.createRadialGradient(100, 50, 5, 90, 60, 100);
	grd.addColorStop(0, "yellow");
	grd.addColorStop(1, "black");
	mainContext.fillStyle = grd;
	mainContext.fillRect(0,0,360,360);
	
}



 window.onload =init;
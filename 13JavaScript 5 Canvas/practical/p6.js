 
var mainCanvis;
var mainContext; 
var eathImage = new Image();
earthImage.src = "earth.png";


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
	var grd = mainContext.createRadialGradient(180, 180, 15, 180, 180, 140);
	grd.addColorStop(0, "yellow");
	grd.addColorStop(1, "black");
	mainContext.fillStyle = grd;
	mainContext.fillRect(0,0,360,360);
	
}



 window.onload =init;
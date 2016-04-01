var mainCanvas;
var mainContext;

function drawShape()
{
 mainCanvas = document.getElementById("canvas");
 mainContext = mainCanvas.getContext("2d");
 
 mainContext.strokeStyle="green";
 
 mainContext.lineWidth = 4;
 
 mainContext.beginPath();
 mainContext.moveTo(20,20);
 mainContext.lineTo(200,20);
 mainContext.lineTo(200,100);
 mainContext.lineTo(110,70);
 mainContext.lineTo(20,100);
 mainContext.closePath();
 
 mainContext.fillStyle = "red";
 
 mainContext.fill();
 
 mainContext.stroke();

}


function init()
{
	setTimeout(drawShape, 5000);
}


 window.onload = init;
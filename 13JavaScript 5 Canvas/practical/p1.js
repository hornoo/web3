 
 var mainCanvas;
 var mainContext;
 
 
 function drawRect()
 {
	 mainCanvas = document.getElementById("canvas");
	 mainContext = mainCanvas.getContext("2d");
	 
	 mainContext.fillStyle = "green";
	 mainContext.fillRect(10,10,50,50);
	 
	 mainContext.fillStyle = "rgba(255,20,150,0.3)";
	 mainContext.fillRect(30,30,50,50);
	 
 }
 
 window.onload = drawRect;
  
 var mainCanvas;
 var mainContext;
 var xLoc =0;
 var yLoc =0;
 var animationTimer;
 
 function animate()
 {
	 mainContext.clearRect(0,0,400,400);
	 mainContext.fillRect(xLoc,yLoc,30,30);
	 
	 xLoc +=10;
	 
	 if(xLoc > 100)
	 {
		 console.log("here");
		 clearInterval(animationTimer);
	 }		 
 }
 
 function init()
 {
	mainCanvas = document.getElementById("canvas");
	mainContext = mainCanvas.getContext("2d");
	
	mainContext.fillStyle = "red";
	
	animationmainCanvas = document.getElementById("canvas");
	 mainContext = mainCanvas.getContext("2d");
	 animationTimer = setInterval(animate, 500);
 }
 
 window.onload = init;
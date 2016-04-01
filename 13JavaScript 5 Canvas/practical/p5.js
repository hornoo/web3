 
 
 function draw()
 {
	 
	 var mainCanvas = document.getElementById("canvas");
	 var mainContext = mainCanvas.getContext("2d");
	 
	 var startAngle = 0;
	 var endAngle = 360 * (Math.PI / 180 ) ;
	 
	 mainContext.lineWidth = 10;
	 
	 
	 mainContext.arc(125,125,100, startAngle,endAngle, true);
	 mainContext.stroke();
	 
	 mainContext.fillStyle = "yellow";
	 mainContext.fill();
	 
	 mainContext.beginPath();
	 
	 mainContext.arc(90, 80, 5, startAngle, endAngle, true);
	 mainContext.stroke();
	 
	 mainContext.beginPath();
	 
	 mainContext.arc(160, 80, 5, startAngle, endAngle, true);
	 mainContext.stroke();
	 
	 mainContext.beginPath();
	 
	 startAngle = 0;
	 endAngle = 180 * (Math.PI /180);
	 
	 mainContext.arc(125,125,60, startAngle,endAngle, false);
	 mainContext.stroke();
	 
	 
	 console.log(endAngle);
 }
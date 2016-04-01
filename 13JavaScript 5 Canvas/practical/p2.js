 

 
  function updateclock()
 {
	 
	 var d = new Date();
 
	 var clock = document.getElementById("output");
	 
	 var time =  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(); 
	 
	 clock.innerHTML = time; 
 }
 
 window.onload = setInterval(updateclock, 1000);
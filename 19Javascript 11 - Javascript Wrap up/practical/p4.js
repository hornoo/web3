var video = document.getElementById("videoElement");

video.addEventListener('pause',alertTimeofpause);

function alertTimeofpause()
{
	var videopausetime = video.currentTime;
	
	alert(videopausetime + " Seconds");
}
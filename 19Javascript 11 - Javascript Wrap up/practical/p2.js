

var playButton = document.getElementById("playbackController");

function playVideo()
{
	var video = document.getElementById("videoElement");
	video.play();
}

playButton.addEventListener('click', playVideo);
var pauseButton = document.getElementById("pauseController");
var mutebutton = document.getElementById("muteController");
var playButton = document.getElementById("playbackController");
var video = document.getElementById("videoElement");

function playVideo()
{
	video.play();
}


function pauseVideo()
{
	video.pause();
}

function mutevideoAudio()
{
	video.muted = !video.muted;
	(video.muted) ? mutebutton.innerHTML = "UnMuted" : mutebutton.innerHTML = "Mute"
}

mutebutton.addEventListener('click', mutevideoAudio);
pauseButton.addEventListener('click', pauseVideo);
playButton.addEventListener('click', playVideo);

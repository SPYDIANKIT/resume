// Video playlist script
function playVideo(videoFileName) {
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = videoFileName;
    document.getElementById('popup-video').style.display = 'block';
}

function closeVideo() {
    document.getElementById('popup-video').style.display = 'none';
    const videoFrame = document.getElementById('video-frame');
    // Stop the video when closing the popup
    videoFrame.src = '';
}

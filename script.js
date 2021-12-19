console.log("page loaded...");
//note this code currently works if user starts video initially.
//nothing happens until after.
function over(element) {
    var video = document.getElementById("penguinVideo")
    // video.autoplay = true;
    // video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
}
function leave(element) {
    // video.autoplay = false;
    // video.muted = true;
    var video = document.getElementById("penguinVideo")
    video.currentTime = 0
    video.playbackRate = 1;
    video.pause();
}
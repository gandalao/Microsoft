let bg = document.querySelector(".video .bg"),
    stop = document.querySelector(" .video .stop"),
    video = document.querySelector(".video video")
// console.log(bg, stop, video)
stop.onclick = function () {
    bg.style.display = "none"
    video.play()
    video.controls = "controls"
}
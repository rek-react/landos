export const initPlayVideo = (buttonSelector, videoSelector)=>{
    const btn = document.querySelector(buttonSelector)
    const videoFrame = document.querySelector(videoSelector)
    if(btn && videoFrame){
        btn.addEventListener("click", (e)=> {
            e.preventDefault()
            if (videoFrame.requestFullscreen) {
                videoFrame.requestFullscreen();
            } else if (videoFrame.mozRequestFullScreen) {
                videoFrame.mozRequestFullScreen();
            } else if (videoFrame.webkitRequestFullscreen) {
                videoFrame.webkitRequestFullscreen();
            } else if (videoFrame.msRequestFullscreen) {
                videoFrame.msRequestFullscreen();
            }
        })
    }
}
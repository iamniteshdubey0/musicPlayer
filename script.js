const progress = document.querySelector("#custom-contoll");
const playPauseBtn = document.querySelector('#playPause');
const music = document.querySelector('#music');

music.onloadedmetadata = function () {
    progress.max = music.duration;
    progress.value = music.currentTime;

}

function playPause(){
    if (playPauseBtn.classList.contains("fa-pause")){
        music.pause();
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
    } else{
        music.play();
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
        if(music.play()){
            setInterval(()=> {
                progress.value = music.currentTime;
            }, 500)
        }
    }
}

progress.addEventListener("change", ()=> {
    music.play();
    music.currentTime = progress.value;
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
})
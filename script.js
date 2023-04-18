let audioFile = document.getElementById("audio-file");
let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");

// pauseMusic.style.display = "none";
// playMusic.style.display = "none";
function playSong() {
    audioFile.play();
    pauseMusic.style.display = "block";
    playMusic.style.display = "none";
}

function pauseSong() {
    audioFile.pause();
    playMusic.style.display = "block";
    pauseMusic.style.display = "none";
}


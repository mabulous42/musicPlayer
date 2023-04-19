let audioFile = document.getElementById("audio-file");
let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");
let controlVolume = document.getElementById("volume-control");

playMusic.style.display = "none";

function playSong() {
    audioFile.play();
    pauseMusic.style.display = "none";
    playMusic.style.display = "block";
}

function pauseSong() {
    audioFile.pause();
    playMusic.style.display = "none";
    pauseMusic.style.display = "block";
}

console.log(controlVolume.value);
function changeVolume() {
    audioFile.volume = controlVolume.value;
    console.log(audioFile.volume);    
}


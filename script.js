let audioFile = document.getElementById("audio-file");
let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");

// pauseMusic.style.display = "none";
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
audioFile.volume = 0.5;
// console.log(volumeLevel);

function increaseVolume() {
    if (audioFile.volume > 0.9) {
        return 1.0;
    } else {
        audioFile.volume += 0.1;
        console.log(audioFile.volume);
        // console.log();
    }

}

function reduceVolume() {
    if (audioFile.volume < 0.2) {
        return 0;
    } else {
        audioFile.volume -= 0.1;
        console.log(audioFile.volume);
    }

}


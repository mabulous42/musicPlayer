let audioFile = document.getElementById("audio-file1");
let audioFile2 = document.getElementById("audio-file2");
let audioFile3 = document.getElementById("audio-file3");
let audioFile4 = document.getElementById("audio-file4");
let audioFile5 = document.getElementById("audio-file5");
let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");
let controlVolume = document.getElementById("volume-control");

let allSongs = [audioFile, audioFile2, audioFile3, audioFile4, audioFile5];

playMusic.style.display = "none";
let count = 0;

function playSong() {
    allSongs[count].play();
    pauseMusic.style.display = "none";
    playMusic.style.display = "block";
}

function pauseSong() {
    allSongs[count].pause();
    playMusic.style.display = "none";
    pauseMusic.style.display = "block";
}

console.log(controlVolume.value);
function changeVolume() {
    audioFile.volume = controlVolume.value;
    console.log(audioFile.volume);
}

function nextSong() {
    if (count === allSongs.length-1) {
        return;
    } else {
        pauseSong()
        allSongs[count].currentTime = 0;
        count++;
        playSong();        
    }
}

function prevSong() {
    if (count === 0) {
        return;
    } else {
        pauseSong()
        allSongs[count].currentTime = 0;
        count--;
        playSong();        
    }
}


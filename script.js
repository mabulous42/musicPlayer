let audioFile = document.getElementById("audio-file1");
let audioFile2 = document.getElementById("audio-file2");
let audioFile3 = document.getElementById("audio-file3");
let audioFile4 = document.getElementById("audio-file4");
let audioFile5 = document.getElementById("audio-file5");
let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");
let controlVolume = document.getElementById("volume-control");
let songDuration = document.getElementById("show-music-duration");

let allSongs = [audioFile, audioFile2, audioFile3, audioFile4, audioFile5];

playMusic.style.display = "none";
let count = 0;
// let sDuration = allSongs[0].duration;
console.log(audioFile.duration);



function playSong() {
    allSongs[count].play();
    console.log(allSongs[count].duration);
    pauseMusic.style.display = "none";
    playMusic.style.display = "block";
    songDuration.innerHTML = `
    <div class="me-2">${allSongs[count].currentTime}</div>
    <input class="w-50" type="range" name="" min="${allSongs[count].currentTime}" max="${allSongs[count].duration}" value="0" step="">
    <div class="ms-2">${allSongs[count].duration}</div>
    `
    setInterval(() => {
        console.log(Math.ceil(allSongs[count].currentTime));
    }, 1000);
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
    if (count === allSongs.length - 1) {
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

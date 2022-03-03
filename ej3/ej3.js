let muted = false,
    paused = false,
    currVolume;

let pause = document.querySelector('.pause');
let play = document.querySelector('.play');
let volUp = document.querySelector('.volumeUp');
let volDown = document.querySelector('.volumeDown');
let stopButton = document.querySelector('.stop');
let toggleMute = document.querySelector('.toggle-mute');
var audio = document.getElementById('audio');

play.addEventListener('click', playFunction);
pause.addEventListener('click', pauseFunction);
volUp.addEventListener('click', volumeUpFunction);
volDown.addEventListener('click', volumeDownFunction);
stopButton.addEventListener('click', stopFunction);
toggleMute.addEventListener('click', toggleMuteFunction);

function playFunction(){
    if(paused){
        paused = false;
        audio.play();
    }
    console.log('play was pressed');
}

function pauseFunction(){
    if(!paused){
        audio.pause();
        paused = true;
    }
    console.log('pause was pressed');
}

function volumeUpFunction(){
    if(audio.volume < 1) audio.volume += 0.1;
    console.log('volumeUp was pressed');
}

function volumeDownFunction(){
    if(audio.volume > 0) audio.volume -= 0.1;
    console.log('volumeDown was pressed');
}

function stopFunction(){
    //aquí no hacemos comprobación de si está sonando o no para que el usuario pueda reiniciar la canción aún estando en pausa
    audio.pause();
    audio.currentTime = 0;
    if(!paused) paused = true;
    console.log('stop was pressed');
}

function toggleMuteFunction(){
    if(audio.volume != 0){
        currVolume = audio.volume;
        audio.volume = 0;
    } else {
        audio.volume = currVolume;
    }
    console.log('toggleMute was pressed');
}
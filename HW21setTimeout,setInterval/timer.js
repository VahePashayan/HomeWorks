let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let stopBtn = document.querySelector("#stop");
let timer = document.querySelector("p");

let millisec = 0;
let sec = 0;
let min = 0;
let hour = 0;

function updateTimer() {
    millisec++;
    if(millisec === 100) {
        sec++;
        millisec = 0;
    }

    if(sec === 60) {
        min++;
        sec = 0;
    }

    if(min === 60) {
        hour++;
        min = 0;
    }

    timer.innerText = hour + ":" + min + ":" + sec + ":" + millisec;
}

let id;

function startTimer() {
    id = setInterval(updateTimer, 10);
    
}

function pauseTimer() {
    clearInterval(id);
}

function stopTimer() {
    millisec = 0;
    sec = 0;
    min = 0;
    clearInterval(id);
    timer.innerText = hour + ":" + min + ":" + sec + ":" + millisec;
}

// let timer = document.querySelector("p")

// function updateTimer() {
//     if(startSec === 60) {
//         startMin++;
//         startSec = 0;
//     }
//     timer.innerText = `${startMin} : ${startSec++}`;
// }

// let timerId = setInterval(updateTimer, 1000);




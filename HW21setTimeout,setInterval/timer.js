let startSec = 0;
let startMin = 0;

let timer = document.querySelector("p")

function updateTimer() {
    if(startSec === 60) {
        startMin++;
        startSec = 0;
    }
    timer.innerText = `${startMin} : ${startSec++}`;
}

updateTimer();
let timerId = setInterval(updateTimer, 1000);

// setTimeout(() => { 
//     clearInterval(timerId);
//     console.log('stop'); 
// }, 1000000);


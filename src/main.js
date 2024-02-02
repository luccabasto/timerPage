
const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

//btn's 
const startBtn = document.getElementById("btn-start")
const pauseBtn = document.getElementById("btn-pause")
const continueBtn = document.getElementById("btn-continue")
const resetBtn = document.getElementById("btn-reset")

// #01Note
let interval; 
let hour = 0;
let minutes = 0;
let seconds = 0;
let isPaused = false;

//start timer
startBtn.addEventListener("click", startTimer)

function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){

            seconds += 1

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            if(minutes === 60){
                hour++;
                minutes = 0;
            }

            hourEl.textContent = formatTime(hour)
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)

        }
    },1000);
}

// #02Note
    //Format Timer

function formatTime(time){
    return time < 10 ? `0${time}`: time; 
}



//resume timer

//pause timer

//continue timer

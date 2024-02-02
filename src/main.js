
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


startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
continueBtn.addEventListener("click", continueTimer)
resetBtn.addEventListener("click", resetTimer)

//start timer
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

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
}

// #02Note - functions

//format timer
function formatTime(time){
    return time < 10 ? `0${time}`: time; 
}

//pause timer
function pauseTimer (){
    isPaused = true
    pauseBtn.style.display = "none"
    continueBtn.style.display = "block"
}

//continue timer
function continueTimer (){
    isPaused = false
    pauseBtn.style.display = "block"
    continueBtn.style.display = "none"
}

//reset timer
function resetTimer (){
    clearInterval(interval);
    hour = 0;
    minutes = 0;
    seconds = 0;
    
    secondsEl.textContent = "00"
    minutesEl.textContent = "00"
    hourEl.textContent = "00"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    continueBtn.style.display = "none"
}

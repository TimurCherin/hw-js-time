const minutesTimer = document.querySelector(".minutes-timer")
const timer = document.querySelector(".timer")
const btn = document.querySelector(".btn")
let time = 60;
let timerId = setInterval(countMinutes, 60000)
function countMinutes(){
    if(time !== 0){
        time--;
    }
    minutesTimer.textContent = `minutes: ${time}`
    if(time === 30){
        alert("залишилось менше половини часу")
    }
    if(time === 0){
        clearInterval(timerId)
    }
}
let timerTime = 30
setInterval(countSeconds, 200)
function countSeconds(){
    if(timerTime !== 0){
        timerTime--;
    }
    timer.textContent = timerTime
    if(timerTime === 10){
        timer.classList.add("animation")
    } 
    if(timerTime === 0){
        btn.classList.remove("hide")
    } 
}
btn.addEventListener("click", update)
function update(){
    timerTime = 30
    timer.textContent = timerTime
}
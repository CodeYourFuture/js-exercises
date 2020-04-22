
let time;
let setClear = -1
function showClockFormat(inputNum) {
  const minute = Math.floor(inputNum / 60);
  const second = inputNum - minute * 60;
  let newMinute = minute.toString().padStart(2, "0");
  let newSecond = second.toString().padStart(2, "0");

  return `Time Remaining:${newMinute}:${newSecond}`;
}

function setAlarm() {
  
  let input = document.getElementById("alarmSet");
  if (input.value <=0){
    alert('set alarm please')
  }else{
    clearInterval(setClear);
  time = input.value;
  setClear = setInterval(decrementEverySecond, 1000);
  }
  

}
function decrementEverySecond() {
  
  time--;
  if (time == 0) {
    document.body.style.background = "orange";
    clearInterval(setClear);
    playAlarm();

  }
  document.getElementById("timeRemaining").innerText = showClockFormat(time);
}

let btnPause = document.querySelector('#pause')

btnPause.addEventListener('click',()=>{

  if (setClear == -1){
     document.querySelector('#pause').innerHTML= 'pause alarm'
    setClear = setInterval(decrementEverySecond, 1000);
  }else{
     document.querySelector('#pause').innerHTML= 'start alarm'
    clearInterval(setClear)
    setClear = -1
  }
  
})


// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}
function playAlarm() {
  audio.play();
}
function pauseAlarm() {
  
  clearInterval(setClear)
  audio.pause();
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00"

  
  document.body.style.background = 'cornsilk' 
}
window.onload = setup;

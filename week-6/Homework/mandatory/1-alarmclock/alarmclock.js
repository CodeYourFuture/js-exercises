
let time;
function showClockFormat(inputNum) {
  const minute = Math.floor(inputNum / 60);
  const second = inputNum - minute * 60;
  let newMinute = minute.toString().padStart(2, "0");
  let newSecond = second.toString().padStart(2, "0");

  return `${newMinute}:${newSecond}`;
}
function decrementEverySecond() {
  time--;
  if (time == 0) {
    document.body.style.background = "orange";
    clearInterval(window.setClear);
    playAlarm();
  }
  document.getElementById("timeRemaining").innerText = showClockFormat(time);
}
function setAlarm() {
  let input = document.getElementById("alarmSet");
  clearInterval(window.setClear);
  time = input.value;
  setClear = setInterval(decrementEverySecond, 1000);

}

let btnPause = document.querySelector('#pause')
btnPause.addEventListener('click',()=>{

  if (setClear == -1){
    time--;
    setClear = setInterval(decrementEverySecond, 1000);
  }else{
    
    clearInterval(window.setClear)
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
  audio.pause();
}
window.onload = setup;

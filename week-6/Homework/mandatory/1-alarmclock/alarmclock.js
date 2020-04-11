let setClear;
let time;
function showClockFormat( inputNum){
  const minute = Math.floor(inputNum/60 )
  const second = (inputNum - minute * 60)
  let newMinute = minute.toString().padStart(2,'0')
  let newSecond = second.toString().padStart(2,'0')

    return `${newMinute}:${newSecond}`
}
function decrementEverySecond(){
  time--
    if (time==0){
      document.body.style.background = 'orange';
      clearInterval(setClear )
      playAlarm()
    }
    document.getElementById('timeRemaining'). innerText = showClockFormat(time)
}
function setAlarm() {
  let  input = document.getElementById('alarmSet')
   time = input.value
  setClear = setInterval(decrementEverySecond,1000)
}



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
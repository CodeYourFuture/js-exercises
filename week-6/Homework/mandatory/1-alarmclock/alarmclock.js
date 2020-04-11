let timeRemaining;
let inNumVal;
let innerval;

 function setAlarm() {
  let inputNum = document.querySelector("#alarmSet");
   inNumVal = inputNum.value;
   timeRemaining = document.querySelector("#timeRemaining");
   console.log(inNumVal);
   innerval = setInterval(decrement, 1000);
}

function decrement(){
  if(inNumVal > 0){
    inNumVal -= 1
  } else{
    playAlarm()
    clearInterval(innerval);
  };
timeRemaining.innerHTML = `Time Remaining: ${numToTime(inNumVal)}`;
}
function numToTime(i) {
  var minutes = Math.floor(i / 60);
  var seconds = i  - (minutes * 60);
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
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

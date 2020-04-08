function setAlarm() {
  let currentTime = document.getElementById("alarmSet").value;
  let timeR = document.getElementById('timeRemaining');
  console.log(timeR);
  console.log(currentTime);
  for (let i = 0 ; i <= currentTime.length ; i ++){
    if (currentTime > 0) {
      timeR.textContent = currentTime - 1; 
      console.log(currentTime);
    } else {
        window.clearInterval(timer);
      }
 }
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  let Dive = document.querySelector('center');
  let Time = document.createElement("p");
  //Dive.append(Time);
  var d = new Date();
  document.getElementById(Time).innerHTML = d.toLocaleTimeString();
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
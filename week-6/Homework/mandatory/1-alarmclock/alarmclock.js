// When you click the`Set Alarm` button the counter at the top of the screen should change to the number you entered in the`input` field.For example, if the`input` field says`10` then the title should say`Time Remaining: 00:10`.

function setAlarm(event) {

  return function () {
    let setTime = document.getElementById("alarmSet")
    let timeRemaining = document.getElementById("timeRemaining")


  }
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
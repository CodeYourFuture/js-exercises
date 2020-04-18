// When you click the`Set Alarm` button the counter at the top of the screen should change to the number you entered in the`input` field.For example, if the`input` field says`10` then the title should say`Time Remaining: 00:10`.
function updateTimeRemaining(numberOfSeconds) {
  const timeRemainingBox = document.getElementById("timeRemaining");
  const date = new Date(numberOfSeconds * 1000);
  const utc = date.toUTCString();
  timeRemainingBox.textContent = `Time Remaining: ${utc.substr(utc.indexOf(":") - 2, 8)}`;
}
function setAlarm() {
  let numberOfSeconds = parseInt(document.getElementById("alarmSet").value)
  if (isNaN(numberOfSeconds)) {
    alert("please enter a number")
  }
  else {
    updateTimeRemaining(numberOfSeconds)
    const interval = setInterval(function () {
      numberOfSeconds--;
      updateTimeRemaining(numberOfSeconds);
      if (numberOfSeconds === 0) {
        clearInterval(interval)
        playAlarm();
      }
    }, 1000)
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
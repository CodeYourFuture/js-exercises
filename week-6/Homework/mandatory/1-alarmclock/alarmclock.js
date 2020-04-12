let inputField = document.querySelector("#timeRemaining");
let alarmSet = document.querySelector("#alarmSet");
let timerId = null

function setAlarm() {
  let getTheValue = alarmSet.value
  inputField.innerHTML = `Time Remaining: 00:${getTheValue}`;
  const timeCountDown = setInterval(() => {
    getTheValue--
    let remainingTime = inputField.innerHTML = `Time Remaining: 00:${getTheValue}`
    if (getTheValue === 0) {
      playAlarm()
      clearInterval(timeCountDown)
      document.body.style.backgroundColor = "pink"
    }
  }, 1000);
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
let inputField = document.querySelector("#timeRemaining");
let alarmSet = document.querySelector("#alarmSet");
let pauseAlarmButton = document.querySelector("#pause");
let timerId = null;
let paused = false;

function setAlarm() {
  let getTheValue = alarmSet.value;
  inputField.innerHTML = `Time Remaining: 00:${getTheValue}`;

  const timeCountDown = setInterval(() => {
    if (!paused) {
      getTheValue--;
      inputField.innerHTML = `Time Remaining: 00:${getTheValue}`;
      if (getTheValue === 0) {
        playAlarm();
        clearInterval(timeCountDown);
        document.body.style.backgroundColor = "pink";
        getTheValue = 0;
      }
    }
  }, 1000);
}

pauseAlarmButton.addEventListener("click", pauseAlarmBtn);

function pauseAlarmBtn() {
  paused = !paused;
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

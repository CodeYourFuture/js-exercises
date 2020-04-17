let isPaused = false;
let intervalId;
let timeLeft;

function setAlarm() {
  timeLeft = document.getElementById("alarmSet").value;
  displayTimeRemaining(timeLeft);
  intervalId = window.setInterval(intervalCallback, 1000);
  function intervalCallback() {
    if (!isPaused && timeLeft > 0) {
      timeLeft -= 1;
    } else if (timeLeft === 0) {
      playAlarm();
      clearInterval(intervalId);
    }
    displayTimeRemaining(timeLeft);
  }
}

function displayTimeRemaining(time) {
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${formatTime(time)}`;
}

function formatTime(numOfSecs) {
  let hrsToDisplay = Math.floor(numOfSecs / 3600);
  numOfSecs = numOfSecs % 3600;
  let minsToDisplay = Math.floor(numOfSecs / 60);
  let secsToDisplay = numOfSecs % 60;
  return (
    pad(hrsToDisplay) + ":" + pad(minsToDisplay) + ":" + pad(secsToDisplay)
  );
}

function pad(num) {
  return num < 10 ? "0" + num : num.toString();
}
console.log(isPaused);

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    clearInterval(intervalId);
    setAlarm();
  });
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    pauseAlarm();
    timeLeft = 0;
    displayTimeRemaining(timeLeft);
  });
  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();
    isPaused = !isPaused;
    document.getElementById("pause").innerHTML = isPaused ? "Resume" : "Pause";
  });
}
function playAlarm() {
  audio.play();
}
function pauseAlarm() {
  audio.pause();
}
window.onload = setup;

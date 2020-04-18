let timeLeft;
let intervalId;
let flashingIntervalId;
let isPaused = false;
let isRedBackground = false;
let isBlueBackground = true;

function setAlarm() {
  reset();

  timeLeft = Number(document.getElementById("alarmSet").value);
  displayTimeRemaining(timeLeft);

  intervalId = window.setInterval(intervalCallback, 1000);
  function intervalCallback() {
    if (!isPaused && timeLeft > 0) {
      timeLeft -= 1;
    } else if (timeLeft === 0) {
      playAlarm();
      clearInterval(intervalId);
      flashingIntervalId = window.setInterval(flashBackgroundColor, 500);
    }
    displayTimeRemaining(timeLeft);
  }
}

function displayTimeRemaining(time) {
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining\n ${formatTime(time)}`;
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

function pauseResumeTimer() {
  isPaused = !isPaused;
  document.getElementById("pause").innerHTML = isPaused
    ? '<i class="fa fa-play"></i>'
    : '<i class="fa fa-pause"></i>';
  document.getElementById("pause").style.backgroundColor = isPaused
    ? "#E75D1D"
    : "#F5E07D";
}

function flashBackgroundColor() {
  if (!isRedBackground && isBlueBackground) {
    document.querySelector("body").style.backgroundColor = "#DE3D36";
    isRedBackground = !isRedBackground;
  } else if (isRedBackground) {
    document.querySelector("body").style.backgroundColor = "#1485B0";
    isBlueBackground = !isBlueBackground;
    isRedBackground = !isRedBackground;
  } else {
    document.querySelector("body").style.backgroundColor = "#1B9D81";
    isBlueBackground = !isBlueBackground;
  }
}

function reset() {
  clearInterval(intervalId);
  clearInterval(flashingIntervalId);
  timeLeft = 0;
  displayTimeRemaining(timeLeft);
  pauseAlarm();
  document.querySelector("body").style.backgroundColor = "#1485B0";
}

// Pause & Resume when (Spacebar) key is pressed, Set Alarm when (Enter) key is pressed.
window.onkeydown = function (event) {
  if (event.keyCode === 32) {
    document.getElementById("pause").click();
  } else if (event.keyCode === 13) {
    document.getElementById("set").click();
  }
};

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    reset();
    document.getElementById("alarmSet").value = "";
  });
  document.getElementById("pause").addEventListener("click", () => {
    pauseResumeTimer();
  });
}
function playAlarm() {
  audio.play();
}
function pauseAlarm() {
  audio.pause();
}
window.onload = setup;

function setAlarm() {
  let timeLeft = Number(document.getElementById("alarmSet").value);
  const intervalID = window.setInterval(intervalCallback, 1000);
  function intervalCallback() {
    displayTimeRemaining(timeLeft);
    if (timeLeft > 0) {
      timeLeft -= 1;
    } else {
      playAlarm();
      clearInterval(intervalID);
    }
  }
}

function displayTimeRemaining(timeLeft) {
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${formatTime(timeLeft)}`;
}

function formatTime(numOfSecs) {
  let minsToDisplay = Math.floor(numOfSecs / 60);
  let secsToDisplay = numOfSecs % 60;
  if (minsToDisplay < 10) {
    minsToDisplay = "0" + minsToDisplay;
  }
  if (secsToDisplay < 10) {
    secsToDisplay = "0" + secsToDisplay;
  }
  return `${minsToDisplay}:${secsToDisplay}`;
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

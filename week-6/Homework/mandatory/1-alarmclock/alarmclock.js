function setAlarm() {
  let timeLeft = Number(document.getElementById("alarmSet").value);
  const intervalId = window.setInterval(intervalCallback, 1000);

  function intervalCallback() {
    displayTimeRemaining(timeLeft);
    if (timeLeft > 0) {
      timeLeft -= 1;
    } else {
      playAlarm();
      clearInterval(intervalId);
    }
  }
}

// function stopTimer() {
//   clearInterval(intervalId);
// }

function displayTimeRemaining(timeLeft) {
  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${formatTime(timeLeft)}`;
}

function formatTime(numOfSecs) {
  let minsToDisplay = Math.floor(numOfSecs / 60);
  let secsToDisplay = numOfSecs % 60;
  return pad(minsToDisplay) + ":" + pad(secsToDisplay);
}

function pad(num) {
  return num < 10 ? "0" + num : num.toString();
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

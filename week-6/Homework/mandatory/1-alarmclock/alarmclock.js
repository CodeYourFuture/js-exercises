function setAlarm() {
  let timeLeft = Number(document.getElementById("alarmSet").value);
  const intervalID = window.setInterval(intervalCallback, 1000);
  function intervalCallback() {
    if (timeLeft > 0) {
      timeLeft -= 1;
      document.getElementById(
        "timeRemaining"
      ).innerText = `Time Remaining: ${formatTime(timeLeft)}`;
      if (timeLeft === 0) {
        playAlarm();
        clearInterval(intervalID);
      }
    }
  }
}

function formatTime(numOfSecs) {
  let minsToDisplay = Math.floor(numOfSecs / 60);
  let secsToDisplay = numOfSecs % 60;
  return `${minsToDisplay}:${secsToDisplay}`;
}

// Testing github issues

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

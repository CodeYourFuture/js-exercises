function setAlarm() {
  let timeLeft = Number(document.getElementById("alarmSet").value);
  // TODO: prevent multiple clicks of set alarm from creating multiple timers
  const intervalID = window.setInterval(myCallback, 1000);
  function myCallback() {
    if (timeLeft > 0) {
      timeLeft -= 1;
      document.getElementById(
        "timeRemaining"
      ).innerText = `Time Remaining: 00:${timeLeft}`;
      if (timeLeft === 0) {
        playAlarm();
        clearInterval(intervalID);
      }
    }
  }
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

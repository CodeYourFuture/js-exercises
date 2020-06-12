function setAlarm() {
  var alarm = document.getElementById("alarmSet").value;
  var newTimeExample = setTimeout(playAlarm, alarm * 1000 + 1000);
  var mind = alarm % (60 * 60);
  var minutes = Math.floor(mind / 60);
  var secd = mind % 60;
  var seconds = Math.ceil(secd);

  var countdown = setInterval(function () {
    document.getElementById("timeRemaining").innerHTML =
      "Time remaining:" + `${minutes}:${seconds}`;
    seconds--;
    if (seconds == 0 && minutes >= 1) {
      minutes--;
      seconds = 59;
    }
    if (minutes < 10) {
      document.getElementById("timeRemaining").innerHTML =
        "Time remaining: 0" + `${minutes}:${seconds}`;
    }
    if (seconds < 10) {
      document.getElementById("timeRemaining").innerHTML =
        "Time remaining: " + `${minutes}: 0${seconds}`;
    }
    if (minutes < 10 && seconds < 10) {
      document.getElementById("timeRemaining").innerHTML =
        "Time remaining: 0" + `${minutes}: 0${seconds}`;
    }
    if (seconds < 0) {
      clearInterval(countdown);
      document.getElementById("timeRemaining").innerHTML =
        "Time remaining: 00:00";
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

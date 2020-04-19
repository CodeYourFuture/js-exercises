function convertTime(time) {
  var mind = time % (60 * 60);
  var minutes = Math.floor(mind / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var secd = mind % 60;
  var seconds = Math.ceil(secd);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let newTime = `${minutes}:${seconds}`;

  return newTime;
}

function setAlarm() {
  let targetInput = document.getElementById("alarmSet");
  let timeInput = targetInput.value;

  let targetH1 = document.getElementById("timeRemaining");
  targetH1.textContent = `Time remaining: ${convertTime(timeInput)}`;
  let decrement = setInterval(function () {
    if (timeInput > 3) {
      timeInput--;
      targetH1.textContent = `Time remaining: ${convertTime(timeInput)}`;
      clearInterval(targetH1);
    } else if (timeInput <= 3 && timeInput > 0) {
      timeInput--;
      document.body.style.backgroundColor = "red";
      targetH1.textContent = `Time remaining: ${convertTime(timeInput)}`;
      clearInterval(targetH1);
    } else {
      targetH1.textContent = `Time remaining: ${convertTime(timeInput)}`;
      clearInterval(timeInput);
      playAlarm(audio);
    }
  }, 1000);
  let targetStop = document.getElementById("stop");
  targetStop.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    targetH1.textContent = `Time remaining: ${convertTime(timeInput)}`;
    location.reload();
  });
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

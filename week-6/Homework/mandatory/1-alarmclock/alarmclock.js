let countDown;

function setAlarm() {
  let valSeconds = document.getElementById("alarmSet").value;

  clearInterval(countDown);
  countDown = window.setInterval(alarmCount, 1000);

  function alarmCount() {
    if (valSeconds > 0) {
      valSeconds -= 1;
      document.getElementById(
        "timeRemaining"
      ).innerText = `Time Remaining: ${formatSeconds(valSeconds + 1)} `;
      if (valSeconds === 0) {
        playAlarm();
        clearInterval(countDown);
      }
    }
  }
}

// this function converts the number to the timeFormat - hours, minutes and seconds
function formatSeconds(number) {
  let minutes = Math.floor(number / 60);
  let seconds = number - minutes * 60;
  //console.log(time);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  // console.log(document.getElementById("set"));

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

formatSeconds(seconds);
{
}

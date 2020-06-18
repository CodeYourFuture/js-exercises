function setAlarm() {
  let timeValue = document.getElementById("alarmSet").value;
  let minValue = Math.floor(timeValue / 60);
  let secValue = timeValue % 60;
  alarmSet = setInterval(() => {
    if (secValue === 0 && minValue > 0) {
      minValue--;
      secValue = 59;
    } else if (secValue > 0) {
      secValue--;
    } else {
      playAlarm();
    }
    document.getElementById("timeRemaining").innerText =
      "Time Remaining:" + addZero(minValue) + " : " + addZero(secValue);
  }, 1000);
}
let alarmSet;
// window.clearInterval(alarmSet);
function addZero(number) {
  return parseInt(number) < 10 ? "0" + number : number;
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

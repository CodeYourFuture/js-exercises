function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;

  let timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.style.width = "500 px";
  rounded = parseFloat(alarmSet);
  let timer = setInterval(function () {
    timeRemaining.innerHTML = `Time Remaining: ${rounded.toFixed(2)}`;
    console.log(rounded);
    if (rounded > 0) {
      rounded -= 0.01;
    } else {
      timeRemaining.innerHTML = `Time Remaining: 00:00`;
      var audio = new Audio("alarmsound.mp3");
      playAlarm(Audio);
      clearInterval(timer);
    }
  }, 10);
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

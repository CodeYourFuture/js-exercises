function setAlarm() {
  let inputField = document.querySelector("#alarmSet");
  let title = document.querySelector("#timeRemaining");
  let counter = inputField.value;
  return setInterval(function() {
    let audioEl = document.querySelector("#myAudio");
    title.innerHTML = "Time Remaining: 00:" + counter;

    if (counter > 0) {
      counter--;
      if (counter == 0) {
        // clearInterval();
        playAlarm(audioEl);
      }
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

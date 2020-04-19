function setAlarm() {
  clearInterval(x);
  let inputField = document.querySelector("#alarmSet");
  let title = document.querySelector("#timeRemaining");
  let counter = inputField.value;
  let resetAlarm = document.querySelector("#reset");

  let x = setInterval(function () {
    let audioEl = document.querySelector("#myAudio");

    let minutes = Math.floor(counter / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (counter - minutes * 60).toString().padStart(2, "0");

    title.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    resetAlarm.addEventListener("click", function () {
      inputField.value = 0;
      title.innerHTML = "Time Remaining: 00:00 ";
      clearInterval(x);
    });

    if (counter > 0) {
      counter--;
      if (counter == 0) {
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

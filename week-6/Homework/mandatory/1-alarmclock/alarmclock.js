let audio = new Audio("alarmsound.mp3");

let backgroundColors;
function changeBackgroundColor() {
  backgroundColors = setInterval(changeColor, 500);
}
function changeColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor =
    body.style.backgroundColor == "red" ? "blue" : "red";
}
function stopChangeBackgroundColor() {
  clearInterval(backgroundColors);
}

function fancyTimeFormat(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let hours = Math.floor(time / 3600);
  time = time - hours - minutes * 3600;

  let newTime = "";

  if (hours > 0) {
    newTime += "" + hours + ":" + (minutes < 10 ? "0" : "");
  }

  newTime += "" + minutes + ":" + (seconds < 10 ? "0" : "");
  newTime += "" + seconds;
  return newTime;
}

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  let timeRemain = document.getElementById("timeRemaining");
  let newTime = setInterval(function () {
    inputValue--;
    timeRemain.textContent = `Time Remaining: ${fancyTimeFormat(inputValue)}`;
    if (inputValue == 0) {
      changeBackgroundColor();
      playAlarm(audio);
      clearInterval(newTime);
    }
    document.getElementById("stop").addEventListener("click", () => {
      document.querySelector("body").style.backgroundColor = "white";
      stopChangeBackgroundColor();
      pauseAlarm(audio);
      // clearInterval(newTime);
    });
  }, 1000);
}
// DO NOT EDIT BELOW HERE

function setup() {
  document.getElementById("alarmSet").placeholder = "seconds";
  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });
}

function playAlarm(audio) {
  audio.play();
}

function pauseAlarm(audio) {
  audio.pause();
}

window.onload = setup;

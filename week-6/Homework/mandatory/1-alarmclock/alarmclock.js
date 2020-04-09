let backgroundColors;

function changeBackgroundColor() {
  backgroundColors = setInterval(changeColor, 500);
}
function changeColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor =
    body.style.backgroundColor == "crimson" ? "#0083B0" : "crimson";
}
function stopChangeBackgroundColor() {
  clearInterval(backgroundColors);
}

function fancyTimeFormat(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let newTime = "";
  newTime +=
    "" + minutes.toString().padStart(2, "0") + ":" + (seconds < 10 ? "0" : "");
  newTime += "" + seconds;
  return newTime;
}

let intervalId = -1;
let inputValue = 0;
let remainingTime = 0;

function setAlarm() {
  clearInterval(intervalId);
  let timeRemain = document.getElementById("timeRemaining");
  inputValue = document.getElementById("alarmSet").value;
  timeRemain.textContent = `Time Remaining: ${fancyTimeFormat(inputValue)}`;
  intervalId = setInterval(function () {
    inputValue--;
    timeRemain.textContent = `Time Remaining: ${fancyTimeFormat(inputValue)}`;
    if (inputValue == 0) {
      changeBackgroundColor();
      playAlarm(audio);
      clearInterval(intervalId);
    }
    remainingTime = inputValue;
  }, 1000);
  document.getElementById("stop").addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = "#0083B0";
    stopChangeBackgroundColor();
    timeRemain.textContent = `Time Remaining: 00:00`;
    document.getElementById("alarmSet").value = "";
    clearInterval(intervalId);
  });
}
function pauseResume() {
  console.log(remainingTime);
  clearInterval(intervalId);
  if (intervalId == -1) {
    document.getElementById("pause").innerText = "Pause";
    let timeRemain = document.getElementById("timeRemaining");
    intervalId = setInterval(() => {
      remainingTime--;
      timeRemain.textContent = `Time Remaining: ${fancyTimeFormat(
        remainingTime
      )}`;
      if (remainingTime == 0) {
        changeBackgroundColor();
        playAlarm(audio);
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    clearInterval(intervalId);
    intervalId = -1;
    document.getElementById("pause").innerText = "Resume";
  }
}
// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3");
function setup() {
  document.getElementById("alarmSet").placeholder = "seconds";
  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });

  document.getElementById("pause").addEventListener("click", pauseResume);
}

function playAlarm(audio) {
  audio.play();
}

function pauseAlarm(audio) {
  audio.pause();
}

window.onload = setup;

let backgroundColors;
let intervalId;
let remainingTime;
let timeRemain;

function displayTime(inputTime) {
  timeRemain.textContent = `Time Remaining: ${fancyTimeFormat(inputTime)}`;
}
function setIntervalTime(inputValueTime) {
  intervalId = setInterval(function () {
    inputValueTime--;
    remainingTime = inputValueTime;
    displayTime(inputValueTime);
    if (Number(inputValueTime) === 0) {
      changeBackgroundColor();
      playAlarm(audio);
      clearInterval(intervalId);
    }
  }, 1000);
}
function changeBackgroundColor() {
  backgroundColors = setInterval(changeColor, 500);
}
function changeColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor == "crimson" ? "#0083B0" : "crimson";
}
function stopChangeBackgroundColor() {
  clearInterval(backgroundColors);
}

function fancyTimeFormat(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let newTime =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  return newTime;
}

function setAlarm() {
  timeRemain = document.getElementById("timeRemaining");
  clearInterval(intervalId);
  inputValue = document.getElementById("alarmSet").value;
  displayTime(inputValue);
  if (Number(inputValue) === 0) {
    alert("Please set the time");
  } else {
    setIntervalTime(inputValue);
  }
  document.getElementById("stop").addEventListener("click", () => {
    document.body.style.backgroundColor = "#0083B0";
    stopChangeBackgroundColor();
    timeRemain.textContent = `Time Remaining: 00:00`;
    document.getElementById("alarmSet").value = "";
    clearInterval(intervalId);
    pauseAlarm(audio);
  });
  document.getElementById("pause").innerText = "Pause";
  document.getElementById("pause").style.backgroundColor = "rgb(0,128,128)";
}
function pauseResume() {
  // clearInterval(intervalId);
  if (Number(remainingTime) === 0) {
  } else {
    if (intervalId == -1) {
      document.getElementById("pause").innerText = "Pause";
      document.getElementById("pause").style.backgroundColor = "rgb(0,128,128)";
      setIntervalTime(remainingTime);
    } else {
      clearInterval(intervalId);
      intervalId = -1;
      document.getElementById("pause").innerText = "Resume";
      document.getElementById("pause").style.backgroundColor = "green";
    }
  }
}

// DO NOT EDIT BELOW HERE

let audio = new Audio("alarmsound.mp3");
function setup() {
  document.getElementById("alarmSet").placeholder = "seconds";

  document.getElementById("set").addEventListener("click", setAlarm);

  document.getElementById("pause").addEventListener("click", pauseResume);
}

function playAlarm(audio) {
  audio.play();
}

function pauseAlarm(audio) {
  audio.pause();
}

window.onload = setup;

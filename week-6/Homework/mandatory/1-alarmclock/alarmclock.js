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

function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  let timeRemain = document.getElementById("timeRemaining");
  let newTime = setInterval(function () {
    inputValue--;
    timeRemain.textContent = `Time Remaining: 00:${inputValue}`;
    if (inputValue == 0) {
      changeBackgroundColor();
      playAlarm(audio);
      clearInterval(newTime);
    }
    document.getElementById("stop").addEventListener("click", () => {
      document.querySelector("body").style.backgroundColor = "white";
      stopChangeBackgroundColor();
      pauseAlarm(audio);
    });
  }, 1000);
}
// DO NOT EDIT BELOW HERE

function setup() {
  var audio = new Audio("alarmsound.mp3");

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

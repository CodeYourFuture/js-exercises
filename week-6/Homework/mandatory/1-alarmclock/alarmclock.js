let makeBlank = true;
let colorRunning;
let timerRunning = false;
let timer;
let audio = document.createElement("audio");
function setAlarm() {
  if (makeBlank) {
    let alarmSet = document.querySelector("#alarmSet").value;
    let timeRemaining = document.querySelector("#timeRemaining");
    audio.src = "./alarmsound.mp3";
    timer = window.setInterval(function alarmCount() {
      if (alarmSet > 0) {
        timerRunning = true;
        alarmSet -= 1;
        timeRemaining.innerText = `Time Remaining: ${conversion(alarmSet)} `;
        if (alarmSet === 0) {
          timerRunning = false;
          audio.play();
          colorRunning = setInterval(colors, 150);
          clearInterval(timer);
        }
      }
    }, 1000);
    makeBlank = false;
  }
}
// console.log(timer);
// turn a number of seconds into minutes:seconds
function conversion(input) {
  let minutes = Math.floor(input / 60);
  let seconds = input - minutes * 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${minutes}:${seconds}`;
}
function colors() {
  let colors = ["green", "blue", "yellow", "red", "purple"];
  let randomColorIndex = Math.floor(Math.random() * 5);
  document.body.style.backgroundColor = colors[randomColorIndex];
}

function stopClick() {
  timerRunning = false;
  audio.pause();
  clearInterval(colorRunning);
  document.body.style.backgroundColor = `white`;
  
}
// timer is top level
function pauseTimer() {
  console.log("clicked pause");
  let pausePlay = document.querySelector(`#pause`);
  if (timerRunning && pausePlay.innerText === `Pause`) {
    console.log("i am running?");
    timerRunning = false;
    clearInterval(timer);
    // timer = null;
    pausePlay.innerText = `Play`;
    console.log(timeRemaining.innerText);
  } else {
    setAlarm();
    pausePlay.innerText = `Pause`;
    timerRunning = true;
  }
}

//makeBlank is here to stop the timer to repeat with every time push the button of Set Alarm.

// DO NOT EDIT BELOW HERE
function setup() {
  var audio = new Audio("alarmsound.mp3");
  document.getElementById("set").addEventListener("click", () => {
    // console.log("clicked set button");
    setAlarm();
  });
  document.getElementById("stop").addEventListener("click", () => {
    // console.log("clicked stop button");
    pauseAlarm(audio);
    stopClick();
  });
  document.getElementById("pause").addEventListener("click", () => {
    console.log(`clicked on pause button`);
    pauseTimer();
  });
}
function playAlarm(audio) {
  audio.play();
}
function pauseAlarm(audio) {
  audio.pause();
}
window.onload = setup;

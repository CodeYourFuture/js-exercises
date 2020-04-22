function convertion(input) {
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
//makeBlank is here to stop the timer to repeat with every time push the button of Set Alarm.
let makeBlank = true;
let colorRunning;
let timerRunning = false;
function setAlarm() {
  if (makeBlank) {
    let alarmSet = document.querySelector("#alarmSet").value;
    let timeRemaining = document.querySelector("#timeRemaining");
    let audio = document.createElement("audio");
    audio.src = "./alarmsound.mp3";
    let stop = document.querySelector("#stop");
    let pause = document.querySelector("#pause");
    let timer = window.setInterval(function alarmCount() {
      if (alarmSet > 0) {
        timerRunning = true;
        alarmSet -= 1;
        timeRemaining.innerText = `Time Remaining: ${convertion(alarmSet)} `;
        if (alarmSet === 0) {
          timerRunning = false;
          audio.play();
          colorRunning = setInterval(colors, 150);
          clearInterval(timer);
        }
      }
    }, 1000);
    stop.addEventListener("click", () => {
      timerRunning = false;
      audio.pause();
      clearInterval(setAlarm);
      clearInterval(colorRunning);
      document.body.style.backgroundColor = `white`;
      // alarmSet.remove();
    });
    console.log();
    pause.addEventListener("click", () => {
      let pausePlay = document.querySelector(`#pause`);
      if (timerRunning && pausePlay.innerText === `Pause`) {
        timerRunning = false;
        clearInterval(timer);
        pausePlay.innerText = `Play`;
        timeRemaining.innerText = `Time Remaining: ${convertion(alarmSet)} `;
        console.log(timeRemaining);
      } else {
        timerRunning = true;
      }
    });
    makeBlank = false;
  }
}

// DO NOT EDIT BELOW HERE

function setup() {
  var audio = new Audio("alarmsound.mp3");

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

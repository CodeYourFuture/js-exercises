function displayTime(time, timeRem) {
  let s = "0";
  if (time > 9){
    s = ""
  }
  timeRem.innerText = `Time Remaining: 00:${s}${time}`;
}

function setAlarm() {
  let time = document.querySelector("#alarmSet").value;
  document.querySelector("#alarmSet").value = "";
  let timeRem = document.querySelector("#timeRemaining");
  displayTime(time, timeRem);
  let interval = setInterval(function(){
    time--;
    displayTime(time, timeRem);
    if(time === 0) {
      playAlarm();
      clearInterval(interval);
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
audio.volume = 0.1;

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

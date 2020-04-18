function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value
  
  let countDown = window.setInterval(alarmCount, 1000)
  function alarmCount() {
    if (inputValue > 0) {
      inputValue-= 1;
    document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatSeconds(inputValue + 1)} `
    if (inputValue === 0) {
      playAlarm()
      clearInterval(countDown);
    }
    }
  }
}

function formatSeconds(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainder = seconds % 60;
  //if remainder is 1 digit, put a zero before it
  if (remainder < 10) {
      remainder = `0${remainder}`
  }
  return `${minutes}:${remainder}`
}

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {


  console.log(document.getElementById("set"));

  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm(audio);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

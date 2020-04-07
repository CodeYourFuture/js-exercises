function setAlarm() {
let alarmSet = document.getElementById("alarmSet").value;

let timeRemaining = document.getElementById("timeRemaining");
let rounded  = parseFloat(alarmSet).toFixed(2);
console.log(alarmSet);
timeRemaining.innerHTML = `Time Remaining: ${rounded}`;
}
// setTimeout(,
// 1000);
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

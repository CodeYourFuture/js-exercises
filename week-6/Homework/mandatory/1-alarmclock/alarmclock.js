function setAlarm() {
let alarmSet = document.getElementById("alarmSet").value;

let timeRemaining = document.getElementById("timeRemaining");
rounded=parseFloat(alarmSet);
  setInterval(function(){ 
    timeRemaining.innerHTML = `Time Remaining: ${rounded.toFixed(2)}`;
    rounded-=0.01;
  }, 10);
};
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

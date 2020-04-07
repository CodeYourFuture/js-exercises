function setAlarm() {
let alarmSet = document.getElementById("alarmSet").value;

let timeRemaining = document.getElementById("timeRemaining");

for(let rounded=parseFloat(alarmSet).toFixed(2);rounded=0;rounded-=1){
  setInterval(function(rounded,timeRemaining){ 
    timeRemaining.innerHTML = `Time Remaining: ${rounded}`;
    rounded-=0.1;
  }, 1000, timeRemaining );
};
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

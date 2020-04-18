

function minAndSec(timeEntry){
  let convertToMin = Math.floor(timeEntry/60);
  let remainderSec = (timeEntry - convertToMin * 60);
  let stringMins = convertToMin.toString();
  let stringSecs = remainderSec.toString();
  return `${stringMins}:${stringSecs}`
  }

  function setAlarm() {

    let getValue = document.getElementById('alarmSet').value;
    let timeRemain = document.getElementById('timeRemaining'); 
    
    const timeSet = setInterval (function () {
  
      if (getValue > 0) {
        getValue--;
        timeRemain.innerText = "Time Remaining:" + minAndSec(getValue);
      } else {
        clearInterval(timeSet);
        playAlarm();
      }
    }, 1000);
  }

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
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
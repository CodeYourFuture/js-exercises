

function setMinsAndSecs(timeEntry){
let convertToMin = Math.floor(timeEntry/60);
let remainderSec = (timeEntry - convertToMin * 60);
let stringMins = convertToMin.toString().padStart(2, "0")
let stringSecs = remainderSec.toString().padStart(2, "0")
console.log(convertToMin, remainderSec)
return `${stringMins}:${stringSecs}`
}


function setAlarm() {
  
  let getValue = document.getElementById('alarmSet').value;
  let timeRemain = document.getElementById('timeRemaining'); 
  const timeSet = setInterval(function () {
    
    if (getValue > 0) {
      getValue--;
      timeRemain.innerText = "Time Remaining:" + setMinsAndSecs(getValue);
    } else {
      clearInterval(timeSet);
      playAlarm();
    }
  }, 1000);
}



// When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.

// Every one second the title should count down by one.

// When the `Time Remaining` reaches `00:00` the alarm should play a sound. You can make the sound happen by using `playAlarm()`.

// You can stop the alarm sound by pressing the `Stop Alarm` button.

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

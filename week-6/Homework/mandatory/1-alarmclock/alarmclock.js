

function setMinsAndSecs(timeEntry){
  let convertToMin = Math.floor(timeEntry/60);
  let remainderSec = (timeEntry - convertToMin * 60);
  let stringMins = convertToMin.toString().padStart(2, "0")
  let stringSecs = remainderSec.toString().padStart(2, "0")
  return `${stringMins}:${stringSecs}`
  }
  
  let time;
  let setClear = -1
  
  setInterval(function myFunction() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("daytime").innerHTML = n}, 1000)
  
    let input = document.getElementById("alarmSet");

  function setAlarm() {
    clearInterval(setClear);
    time = input.value;
    setClear = setInterval(decrementEverySecond, 1000);
  }
  
  function decrementEverySecond() {
    time--;
    if (time == 0) {
      clearInterval(setClear);
      playAlarm();
    }
    document.getElementById("timeRemaining").innerText = setMinsAndSecs(time);
  }
  
  let btnPause = document.querySelector('#pause')
  btnPause.addEventListener('click',()=>{
    if (setClear == -1){
      document.querySelector('#pause').innerHTML= '&#10074 &#10074'
      setClear = setInterval(decrementEverySecond, 1000);
    }else{
      document.querySelector('#pause').innerHTML= '&#9658'
      clearInterval(setClear)
      setClear = -1
    }
  })

  let btnClear = document.querySelector('#stop')
  btnClear.addEventListener('click',()=>{input.value = "";
  document.getElementById("timeRemaining").innerText = "00:00";
  clearInterval(setClear)
})

var setBtn = document.getElementById("alarmSet");
setBtn.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("set").click();
  }
});

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

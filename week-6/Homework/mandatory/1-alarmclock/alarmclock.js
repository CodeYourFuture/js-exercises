// When you 
//click the 
//`Set Alarm` button counter at 
//the top of the screen should change to the number you entered in the
// `input` field. For example, if the `input` field says `10` then the title should say `Time Remaining: 00:10`.
// Every one second the title should count down by one.
// When the `Time Remaining` reaches `00:00` the 
//alarm should play a sound. You can make the sound happen by === function created in the test
//using `playAlarm()`.  === function created in the test
// You can stop the alarm sound by pressing the `Stop Alarm` button.

//problem with this is the counter is not correct, need to google this. 
function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value
  let countDown = window.setInterval(myCallback, 1000)

  function myCallback() {
    if (inputValue > 0) {
      inputValue -= 1;
      document.getElementById("timeRemaining").innerText = `Time Remaining: 00:${inputValue + 1} `
      if (inputValue === 0) {
        playAlarm()
        clearInterval(countDown);
      }
    }
  }
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
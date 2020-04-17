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

//problem with this is the counter is not correct, need to google this. Did a separate test-time-format.js file to create a separate function to test the minute and seconds format.

let countDown;

function setAlarm() {
  clearInterval(countDown); // if we call setAlarm function, this clears any setInterval that is active
  let inputValue = document.getElementById("alarmSet").value;
  countDown = window.setInterval(alarmCount, 1000);

  function alarmCount() {
    if (inputValue > 0) {
      inputValue -= 1;
      document.getElementById("timeRemaining").innerText = `Time Remaining: ${formatSeconds(inputValue + 1)} `
      if (inputValue === 0) {
        playAlarm()
        clearInterval(countDown);
      }
    }
  }
}
// this function converts the number to the timeFormat - hours, minutes and seconds 
function formatSeconds(number) { 
  //let hours = Math.floor(number / 3600);
  let minutes = Math.floor(number / 60);
  //let time = number - hours * 60 * 60;
  //console.log(time);
  let seconds = number - minutes * 60;
  

  // if (hours < 10) {
  //   hours = `0${hours}`
  // }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`;
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
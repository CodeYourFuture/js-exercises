
function setAlarm() {
  let audEl = document.querySelector("#myAudio");

  let inputField = document.querySelector("#alarmSet");
  let title = document.querySelector("#timeRemaining");
  let counter = inputField.value;
  return setInterval(function() {
    title.innerHTML = "Time Remaining: 00:" + counter;
    if (counter > 0){
      counter--;
      if (counter == 0){
      clearInterval(counter);
      playAlarm(audEl);
      }     
    }
  }, 1000); 
};



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

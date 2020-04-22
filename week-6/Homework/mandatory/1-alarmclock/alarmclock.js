// Public variables for time remaining and intervar timer and second input
let labelTimeRemainingEl
let timeInterval;
let seconds;

function setAlarm() {
  // Access to time remaining element in document
  labelTimeRemainingEl = document.querySelector("#timeRemaining");
  // Access to alarm set button in document
  let alarmSetEl = document.querySelector("#alarmSet");
  // Evalueate alarmSetEl to second
  seconds = alarmSetEl.value;
  // Stopm timer just in case if our timer started before
  clearInterval(timeInterval);
  // Run the timer call cunter function every seconds
  timeInterval = setInterval(counter, 1000); //run this thang every 2 seconds
}

function counter() { // Cunter function to decrease second
  if (seconds > 0) {
    seconds -= 1;
  }
  else{
    // if seconds it was zero call playAlarm function
    playAlarm();
    // if seconds it was zero stop the timer
    clearInterval(timeInterval);
  }
  // Evaluate H1 element with "Time Remaining: " + converSecondToMinute function
  labelTimeRemainingEl.textContent = "Time Remaining: " + converSecondToMinute(seconds);
}

function converSecondToMinute(secondParameter) { // Convert second to Minute and second to show in document
  let minute = parseInt(secondParameter / 60) < 10 ? "0" + parseInt(secondParameter / 60) : parseInt(secondParameter / 60);
  let second = secondParameter - parseInt(secondParameter / 60) * 60 < 10 ? "0" + (secondParameter - parseInt(secondParameter / 60) * 60) : secondParameter - parseInt(secondParameter / 60) * 60;
  return minute + ":" + second;
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
  audio.volume = 0.005;
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

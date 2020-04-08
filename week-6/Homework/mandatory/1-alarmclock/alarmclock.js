let counter = {};
function setAlarm() {
  // getting the html elements
  counter.timer = document.querySelector('#alarmSet').value;
  counter.message = document.querySelector('#timeRemaining');
  // if a negative number is entered , changing it to positive
  if (counter.timer < 0) {
    counter.timer *= -1;
  }
  // start the alarm countdown

  counter.ticker = setInterval(function() {
    counter.timer--;
    //stop the countdown of the alarm and play the alarm
    if (counter.timer <= 0) {
      playAlarm();
      clearInterval(counter.ticker);
      counter.timer = 0;
    }
    // Calculate remaining time
    counter.secs = counter.timer;
    counter.mins = Math.floor(counter.secs / 60);
    counter.secs -= counter.mins * 60;
    // updating the HTML and setting up the time format on the heading message to 00:00
    if (counter.mins < 10 && counter.secs < 10) {
      counter.message.textContent = `Time Remaining: 0${counter.mins}:0${counter.secs}`;
    } else if (counter.mins >= 10 && counter.secs < 10) {
      counter.message.textContent = `Time Remaining: ${mins}:0${secs}`;
    } else if (counter.mins < 10 && counter.secs >= 10) {
      counter.message.textContent = `Time Remaining: 0${counter.mins}:${counter.secs}`;
    } else {
      counter.message.textContent = `Time Remaining: ${counter.mins}:${counter.secs}`;
    }
  }, 1000);
}
//setInterval(setAlarm,1000);

// DO NOT EDIT BELOW HERE
var audio = new Audio('alarmsound.mp3');
function setup() {
  document.getElementById('set').addEventListener('click', () => {
    setAlarm();
  });
  document.getElementById('stop').addEventListener('click', () => {
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

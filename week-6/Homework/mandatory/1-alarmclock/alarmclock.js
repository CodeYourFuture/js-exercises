let ticker, colorInterval, message, secs, hours, minutes;
let playing = true,
  flashColor = 0;
function setAlarm() {
  // getting the html elements
  secs = document.querySelector('#alarmSet').value;
  message = document.querySelector('#timeRemaining');
  // if a negative number is entered , changing it to positive
  if (secs < 0) {
    secs *= -1;
  }
  // start the alarm countdown

  ticker = setInterval(countdownTimer, 1000);
}

function pauseResumeAlarm() {
  if (playing) {
    clearInterval(ticker);
    playing = false;
    document.getElementById('pause').innerHTML = 'Resume Alarm';
    document.getElementById('set').disabled = true;
    document.getElementById('stop').disabled = true;
  } else {
    document.getElementById('set').disabled = false;
    document.getElementById('stop').disabled = false;
    playing = true;
    document.getElementById('pause').innerHTML = 'Pause Alarm';
    ticker = setInterval(countdownTimer, 1000);
  }
}
function lightning() {
  if (flashColor === 0) {
    color = 'red';
    flashColor = 1;
  } else {
    color = 'white';
    flashColor = 0;
  }
  document.body.style.backgroundColor = color;
}
function countdownTimer() {
  secs--;
  //stop the countdown of the alarm and play the alarm
  if (secs <= 0) {
    playAlarm();
    clearInterval(ticker);
    secs = 0;
    colorInterval = setInterval(lightning, 200);
  }
  // Calculate remaining time
  hours = Math.floor(secs / 3600);
  minutes = Math.floor((secs - hours * 3600) / 60);
  secs = secs - hours * 3600 - minutes * 60;
  // updating the HTML and setting up the time format on the heading message to 00:00:00

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  message.textContent = `Time Remaining: ${hours}:${minutes}:${secs}`;
}
// DO NOT EDIT BELOW HERE

var audio = new Audio('alarmsound.mp3');

function setup() {
  document.getElementById('set').addEventListener('click', () => {
    setAlarm();
  });

  document.getElementById('stop').addEventListener('click', () => {
    pauseAlarm();
  });
  document.getElementById('pause').addEventListener('click', () => {
    pauseResumeAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  clearInterval(colorInterval);
  document.body.style.backgroundColor = 'white';
}
window.onload = setup;

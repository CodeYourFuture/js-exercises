//Simple countdown timer.
//One button "setAlarm" sets the timer
//One button "stopAlarm" mutes the alarm *sound*.

//Deployed at: https://cyf-alarm-clock-sample-soln.glitch.me/

//This solution uses a global to track secondsRemaining instead of a closure in setAlarm.

//Multiple presses of the "set alarm" button will
//all reset and set this singleton interval.

//DOM elements
// (we can add the button, but as task says don't change it, we won't. For consistency)
const userInput = document.getElementById("alarmSet");
const displayScreen = document.getElementById("timeRemaining");

//setting a variable to use with setinterval
// setinterval return a value that can be used to clear it later on by clearinterval method, Try googling setinterval
let intervalID;
let flashIntervalId;
//number of seconds remaining before timer should ring, the countdown
let secondsRemaining;

//Sets and starts the alarm countdown,
//based on a value it finds in the DOM
let paused = false;
function setAlarm() {
  clearIntervalIfSet();

  if (!paused) {
    var temp = getSecondsFromInput();
    if (!temp) {
      alert("Please enter a valid time");
      return;
    }
    secondsRemaining = temp;
    updateDisplay(secondsRemaining);
  }
  paused = false;

  //to get the first second to display
  //call tick every second, update the value of intervalID, to be able to clear it later
  intervalID = setInterval(() => tick(), 1000);
}
//Called every second,
//Decrements remaining time,
//updates display
//if time is up, trigger alarm and stop timer
function tick() {
  secondsRemaining -= 1;
  updateDisplay(secondsRemaining);
  if (secondsRemaining <= 0) {
    playAlarm();
    flashIntervalId = setInterval(flashColor, 500);
    clearIntervalIfSet();
  }
}

//Clear the timer interval, if it has been set.
//It's ok to call this if interval is not set.
function clearIntervalIfSet() {
  if (intervalID) {
    clearInterval(intervalID);
    //  intervalID = undefined; //we are reseting the id instantly, but if you have more intervals you can have some overlapping
    //as the value is created on the fly, so it can be helpful in more than one interval to set each intervalid to undefiend in the end
  }
}

//Get the user input from the DOM as a number (in seconds)
function getSecondsFromInput() {
  var secondsAmount = Number(userInput.value);
  if (secondsAmount <= 0) {
    return;
  }
  return Number(userInput.value);
}

//update the DOM time-remaining display to show the seconds remaining
function updateDisplay(secondsRemaining) {
  const pad = (n) => n.toString().padStart(2, "0"); //if you don't want padstart (browser compatibility), you can use a mix of repeat and slice to do same effect

  const mm = pad(Math.floor(secondsRemaining / 60));
  const ss = pad(secondsRemaining % 60);

  const msg = `Time Remaining: ${mm}:${ss}`;
  displayScreen.textContent = msg;
}

//extra
//flash color
let background = document.body.style; //backgroundColor
function flashColor() {
  let getRandomRGB = function () {
    return Math.floor(Math.random() * 255);
  };
  let random1 = getRandomRGB();
  let random2 = getRandomRGB();
  let random3 = getRandomRGB();
  if (!audio.paused) {
    background.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  }
}
//pause button
let pauseButton = document.getElementById("pause");
function pauseAlarm() {
  clearIntervalIfSet();
  paused = true;
}
//if you want to use pause button with start, some change will be done to set

pauseButton.addEventListener("click", () => pauseAlarm());

//#region  DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
    background.backgroundColor = "";
    paused = false;
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  clearIntervalIfSet();
  updateDisplay(0);
  clearInterval(flashIntervalId);
  audio.pause();
}

window.onload = setup;
//#endregion
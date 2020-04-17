let mypauseButton = document.querySelector("#pause");
let myrestartButton = document.querySelector("#restart");
let mySetTimeValue = null;
let myTimeRemaining = null;
let SetIntAlarm = null;
let counter = -1;

function timeIt() {
  if (mySetTimeValue - counter < 60 && mySetTimeValue - counter > 0) {
    counter += 1;
    myTimeRemaining.innerHTML =
      "Time Remaining: " + convertSeconds(mySetTimeValue - counter);
  } else if (mySetTimeValue - counter > 60 || mySetTimeValue - counter === 60) {
    counter += 1;
    myTimeRemaining.innerHTML =
      "Time Remaining: " + convertSeconds(mySetTimeValue - counter);
  } else {
    myTimeRemaining.innerHTML = "Time Remaining:"+ convertSeconds(0);
    clearInterval(SetIntAlarm);
    playAlarm();
    setInterval(function () {
      let colorArr = [
        "brown",
        "red",
        "orange",
        "green",
        "blue",
        "purple",
        "yellow",
        "pink",
        "gray",
      ];
      let randomNumber = Math.floor(Math.random() * colorArr.length);
      document.body.style.backgroundColor = colorArr[randomNumber];
    }, 200);
  }
}

function setAlarm() {
  clearInterval(SetIntAlarm);
  mySetTimeValue = Number(document.querySelector("#alarmSet").value);
  myTimeRemaining = document.querySelector("#timeRemaining");
  SetIntAlarm = setInterval(timeIt, 1000);
}
function convertSeconds(seconds) {
  if (seconds > 60 || seconds === 60) {
    let minutes = Math.floor(seconds / 60);
    let leftSeconds = seconds % 60;
    if (
      minutes > 10 ||
      (minutes === 10 && leftSeconds < 10 && leftSeconds > 0) ||
      leftSeconds === 0
    ) {
      return `${minutes}` + ":" + "0" + `${leftSeconds}`;
    } else if (
      minutes > 10 ||
      (minutes === 10 && leftSeconds > 10 && leftSeconds < 60)
    ) {
      return `${minutes}` + ":" + `${leftSeconds}`;
    } else if (minutes < 10 && leftSeconds > 10 && leftSeconds < 60) {
      return "0" + `${minutes}` + ":" + `${leftSeconds}`;
    } else if (minutes < 10 && leftSeconds < 10 && leftSeconds > 0) {
      return "0" + `${minutes}` + ":" + "0" + `${leftSeconds}`;
    } else if (minutes < 10 && leftSeconds === 10) {
      return "0" + `${minutes}` + ":" + `${leftSeconds}`;
    } else {
      return `${minutes}` + ":" + `${leftSeconds}`;
    }
  } else {
    if (seconds < 10 && seconds > 0 || seconds === 0) {
      return "00 :" + "0" + seconds;
    }
  }
  return "00 :"  + seconds ;
}
mypauseButton.addEventListener("click", mypause);
function mypause() {
  clearInterval(SetIntAlarm);
}

myrestartButton.addEventListener("click", myrestart);
function myrestart() {
  SetIntAlarm = setInterval(timeIt, 1000);
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

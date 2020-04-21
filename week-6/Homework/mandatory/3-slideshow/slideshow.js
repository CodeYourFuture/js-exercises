// Write your code here
let number = 425;
let slider = document.getElementById("slider");
slider.src = `https://unsplash.it/g/640/${number}`;
let forwardInterval;
let backwardInterval;
let isRunning = false;

function forward() {
  clearInterval(backwardInterval);
  clearInterval(forwardInterval);
  slider.src = `https://unsplash.it/g/640/${number}`;
  number++;
  isRunning = false;
}
function backward() {
  clearInterval(forwardInterval);
  clearInterval(backwardInterval);
  slider.src = `https://unsplash.it/g/640/${number}`;
  number--;
  isRunning = false;
}

function autoForward() {
  console.log(forwardInterval);
  if (isRunning) {
    return;
  }
  clearInterval(backwardInterval);
  forwardInterval = setInterval(function () {
    slider.src = `https://unsplash.it/g/640/${number}`;
    number++;
  }, 1000);
  isRunning = true;
}

function autoBackward() {
  clearInterval(forwardInterval);
  if (isRunning) {
    return;
  }
  backwardInterval = setInterval(function () {
    slider.src = `https://unsplash.it/g/640/${number}`;
    number--;
  }, 1000);
  isRunning = true;
}

function stop() {
  clearInterval(forwardInterval);
  clearInterval(backwardInterval);
  isRunning = false;
}
let forwardbtn = document.getElementById("forward");
forwardbtn.addEventListener(`click`, forward);
let backwardbtn = document.getElementById("backward");
backwardbtn.addEventListener(`click`, backward);
let autoForwardBtn = document.getElementById("autoforward");
autoForwardBtn.addEventListener(`click`, autoForward);
let autoBackwardBtn = document.getElementById("autobackward");
autoBackwardBtn.addEventListener(`click`, autoBackward);
let stopbtn = document.getElementById("stop");
stopbtn.addEventListener(`click`, stop);

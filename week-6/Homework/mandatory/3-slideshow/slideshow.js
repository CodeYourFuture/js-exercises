// Write your code here
let number = 425;
let slider = document.getElementById("slider");
slider.src = `https://unsplash.it/g/640/${number}`;
function forward() {
  slider.src = `https://unsplash.it/g/640/${number}`;
  number++;
}
function backward() {
  slider.src = `https://unsplash.it/g/640/${number}`;
  number--;
}
function autoForward() {
  setInterval(forward, 1000);
}
function autoBackward() {
  setInterval(backward, 1000);
}
function stop() {
  clearInterval(autoForward());
  clearInterval(autoBackward());
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

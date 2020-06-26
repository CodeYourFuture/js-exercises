// Write your code here
let techs = [
  "pics/html.jpg",
  "pics/css.jpg",
  "pics/javascript.jpg",
  "pics/node.jpg",
  "pics/react.jpg",
];
let index = 0;

function slideShow() {
  renderIndex(index);
}

function forwardMove() {
  index++;
  if (index == techs.length) {
    index = index - techs.length;
  }
  renderIndex(index);
  renderImage(index);
}

function backMove() {
  index--;
  if (index < 0) {
    index = index + techs.length;
  }
  renderIndex(index);
  renderImage(index);
}

function renderIndex(i) {
  document.querySelector("#indexPlace").textContent = i;
}
function renderImage(i) {
  document.querySelector("#imgPlace").src = techs[i];
}

function autoBackMove() {
  addRemainTime();
  setTimer(backMoveWithTime);
}

function backMoveWithTime() {
  backMove();
  addRemainTime();
}

function forwardMoveWithTime() {
  forwardMove();
  addRemainTime();
}

function autoForwardMove() {
  setTimer(forwardMoveWithTime);
  addRemainTime();
}

function stopAuto() {
  clearInterval(timerImage);
  clearInterval(timerRemainTime);
}

let timerImage, timerRemainTime;
function setTimer(func) {
  timerImage = setInterval(func, 5000);
}

function addRemainTime() {
  let timer = 5;
  document.querySelector("#time_remain").textContent = `Time remain: ${timer}`;
  timerRemainTime = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(
        "#time_remain"
      ).textContent = `Time remain: ${timer}`;
      console.log(timer);
    }
  }, 1000);
}

function setup() {
  document.querySelector("#backBtn").addEventListener("click", backMove);
  document.querySelector("#forwardBtn").addEventListener("click", forwardMove);
  document
    .querySelector("#autobackBtn")
    .addEventListener("click", autoBackMove);
  document
    .querySelector("#autoforwardBtn")
    .addEventListener("click", autoForwardMove);
  document.querySelector("#stopBtn").addEventListener("click", stopAuto);
}
window.onload = setup;

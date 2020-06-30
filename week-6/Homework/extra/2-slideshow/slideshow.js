// Write your code here
let techs = [
  "pics/html.jpg",
  "pics/css.jpg",
  "pics/javascript.jpg",
  "pics/node.jpg",
  "pics/react.jpg",
];
let index = 0;
let timer = document.querySelector("#timechange").value;
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
////////////////////////////////////////////////////////////////////
function renderTimeChange() {
  document.querySelector("#timechange").style.visibility = "visible";
}
//////////////////////////////////////////////////////////////////////

///document.querySelector("#timechange").value);

///////////////////////////////////////////////////////////////////////////
function autoBackMove() {
  addRemainTime(timer);
  setTimer(backMoveWithTime);
  renderTimeChange();
}

function backMoveWithTime() {
  backMove();
  addRemainTime(timer);
}

function forwardMoveWithTime() {
  forwardMove();
  addRemainTime(timer);
}

function autoForwardMove() {
  addRemainTime(timer);
  setTimer(forwardMoveWithTime);
  renderTimeChange();
}

function stopAuto() {
  clearInterval(timerImage);
  clearInterval(timerRemainTime);
  document.querySelector("#time_remain").textContent = "Time remain: Stopped";
}

let timerImage, timerRemainTime;
function setTimer(func) {
  timerImage = setInterval(func, timer * 1000); ////////////////////////////////////////
}

function addRemainTime(t) {
  document.querySelector(
    "#time_remain"
  ).textContent = `Time remain: ${t} seconds`; //////////////////////////////
  timerRemainTime = setInterval(() => {
    if (t > 0) {
      t--;
      document.querySelector(
        "#time_remain"
      ).textContent = `Time remain: ${t} seconds`; ///////////////////////////////////////////
      //console.log(timer);
    }
  }, 1000);
}

function changeTimeInterval() {
  timer = document.querySelector("#timechange").value;
  stopAuto();
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
  document
    .querySelector("#timechange")
    .addEventListener("change", changeTimeInterval);
}
window.onload = setup;

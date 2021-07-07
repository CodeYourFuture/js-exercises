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

//this function calls the renderIndex function
function slideShow() {
  renderIndex(index);
}

//this function change the image on 1 step toward
function forwardMove() {
  index++;
  if (index == techs.length) {
    index = index - techs.length;
  }
  renderIndex(index);
  renderImage(index);
}

//this function change the image on 1 step back
function backMove() {
  index--;
  if (index < 0) {
    index = index + techs.length;
  }
  renderIndex(index);
  renderImage(index);
}

//it renders index of current image
function renderIndex(i) {
  document.querySelector("#indexPlace").textContent = i;
}

//it renders image on screen
function renderImage(i) {
  document.querySelector("#imgPlace").src = techs[i];
}

//it makes visible checkbox for changing of renew interval
function renderTimeChange() {
  document.querySelector("#timechange").style.visibility = "visible";
}

//it turns on automatic movement back
function autoBackMove() {
  addRemainTime(timer);
  setTimer(backMoveWithTime);
  renderTimeChange();
}

//it adds render of Remaining Time to backMove function
function backMoveWithTime() {
  backMove();
  addRemainTime(timer);
}

//it adds render of Remaining Time to forvardMove function
function forwardMoveWithTime() {
  forwardMove();
  addRemainTime(timer);
}

//it runs automatic changing of slides toward
function autoForwardMove() {
  addRemainTime(timer);
  setTimer(forwardMoveWithTime);
  renderTimeChange();
}

//it stops automatic functions
function stopAuto() {
  clearInterval(timerImage);
  clearInterval(timerRemainTime);
  document.querySelector("#time_remain").textContent = "Time remain: Stopped";
}

let timerImage, timerRemainTime;

//function sets timer for changing of slide
function setTimer(func) {
  timerImage = setInterval(func, timer * 1000);
}

//it renders Remaining Time for both automatic movements of slides
function addRemainTime(t) {
  document.querySelector(
    "#time_remain"
  ).textContent = `Time remain: ${t} seconds`;
  timerRemainTime = setInterval(() => {
    if (t > 0) {
      t--;
      document.querySelector(
        "#time_remain"
      ).textContent = `Time remain: ${t} seconds`;
    }
  }, 1000);
}

//it sets interval of slide changing
function changeTimeInterval() {
  timer = document.querySelector("#timechange").value;
  stopAuto();
}

//it runs active all control elements like buttons
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

// Write your code here

let pic1 =
  "https://images.unsplash.com/photo-1505764761634-1d77b57e1966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let pic2 =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let pic3 =
  "https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let pic4 =
  "https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let pictures = [pic1, pic2, pic3, pic4];
let slide = document.querySelector("#slideBox");
let image = document.createElement("img");
slide.appendChild(image);
const fwdBtn = document.querySelector("#forward");
const backBtn = document.querySelector("#backward");
const autoFwdBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");
let i = 0;
let j;

function forwardImg() {
  image.src = pictures[i];
  i++;
  j = i - 2;
  i == pictures.length - 1 ? (i = 0) : i;
}

function backwardImg() {
  image.src = pictures[j];
  j--;
  i = j + 2;
  j < 0 ? (j = pictures.length - 1) : j;
  console.log(j);
}
fwdBtn.addEventListener("click", forwardImg);
backBtn.addEventListener("click", backwardImg);

autoFwdBtn.addEventListener("click", function() {
  var myVar = setInterval(forwardImg, 1000);
  stopBtn.addEventListener("click", function() {
    clearInterval(myVar);
  });
});
// stopBtn.addEventListener("click", myStopBtn);
// function myStopBtn(){

//

// Write your code here
let slides = [
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1591727105417-a0a1055f48c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=584&q=80",
];

const body = document.querySelector("body");
body.style.backgroundColor = "pink";

const divBackButton = document.querySelector(".backButton");
const divForwardButton = document.querySelector(".forwardButton");
const divPicture = document.querySelector(".picture");
const divAutoBack = document.querySelector(".autoBack");
const divAutoForward = document.querySelector(".autoForward");
const stopButton = document.querySelector(".stopButton");
const inputField = document.querySelector(".input");
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
const autoForwardButton = document.createElement("button");
const autoBackButton = document.createElement("button");

divAutoBack.appendChild(autoBackButton);
autoBackButton.innerText = "Auto Back";
divAutoForward.appendChild(autoForwardButton);
autoForwardButton.innerText = "Auto Forward";
divForwardButton.appendChild(forwardButton);
forwardButton.innerText = "Forward";
divBackButton.appendChild(backButton);
backButton.innerText = "Back";
const img = document.createElement("img");
divPicture.appendChild(img);

let timeBetweenSlides = 2000;
inputField.addEventListener("input", (e) => {
  const userInput = parseInt(e.target.value);
  if (userInput > 0) {
    timeBetweenSlides = userInput;
  }
  console.log(timeBetweenSlides);
});

let index = 0;
img.src = slides[index];
let autoInterval = null;

forwardButton.addEventListener("click", forwardBtn);
backButton.addEventListener("click", backBtn);

autoForwardButton.addEventListener("click", function () {
  if (autoInterval) {
    //true
    stopBtn();
  }
  autoInterval = setInterval(forwardBtn, timeBetweenSlides);
});

autoBackButton.addEventListener("click", function () {
  if (autoInterval) {
    stopBtn();
  }
  autoInterval = setInterval(backBtn, timeBetweenSlides);
});

stopButton.addEventListener("click", stopBtn);
function stopBtn() {
  clearInterval(autoInterval);
}

function forwardBtn() {
  index = index + 1;
  if (index > slides.length - 1) {
    index = 0;
  }
  img.src = slides[index]; // index[1] /
  console.log(index);
}

function backBtn() {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  img.src = slides[index];
  console.log(index);
}
backBtn();
forwardBtn();

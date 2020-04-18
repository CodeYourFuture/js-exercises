let slides = [
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/355411/pexels-photo-355411.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
// console.log(slides[0].src);

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

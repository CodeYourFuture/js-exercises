// Write your code here
const images = [
  {
    src:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1520387294843-fd994fd872e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  },
  {
    src:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=841&q=80",
  },
];

let img = document.querySelector("img");
let forBtn = document.querySelector("#forward");
forBtn.addEventListener("click", slideForward);
let backBtn = document.querySelector("#back");
backBtn.addEventListener("click", slideBack);
let autoForwardBtn = document.querySelector("#autoForward");
autoForwardBtn.addEventListener("click", autoSlideForward);
let autoBackBtn = document.querySelector("#autoBack");
autoBackBtn.addEventListener("click", autoSlideBack);
let stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", stopAutoPlay)
let counter = 0;
let interval;

function slideForward() {
  img.src = images[counter % images.length].src;
  counter++;
  console.log(counter % images.length);
}

function slideBack() {
  img.src = images[counter % images.length].src;
  if (counter === 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  console.log(counter % images.length);
}

function autoSlideForward() {
  interval = setInterval(function() {
      slideForward()
  }, 1000)
}

function autoSlideBack() {
    interval = setInterval(function() {
        slideBack();
    }, 1000)
}

function stopAutoPlay() {
    clearInterval(interval);
}
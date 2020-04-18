let images = [
  "https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80",
  "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
  "https://images.unsplash.com/photo-1523287409476-a9e70a25af3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
];

let alts = [
  "Drakolimni of Tymfi, Greece",
  "Harley-Davidson",
  "Bridge overseeing gulf",
  "Bicycle standing infront of a wooden gate",
  "Female camper enjoying morning tea",
  "Ski Jump",
];

const currentImg = document.querySelector("#current-img");

let index = 0;
currentImg.src = images[index];
currentImg.alt = alts[index];

function moveForward() {
  index = index + 1 < images.length ? index + 1 : 0;
  currentImg.src = images[index];
  currentImg.alt = alts[index];
  console.log(index);
}

function moveBack() {
  index = index - 1 >= 0 ? index - 1 : images.length - 1;
  currentImg.src = images[index];
  currentImg.alt = alts[index];
  console.log(index);
}

let autoInterval;

const forwardBtn = document.querySelector("#forward-btn");
forwardBtn.addEventListener("click", () => {
  clearInterval(autoInterval);
  moveForward();
});

const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click", () => {
  clearInterval(autoInterval);
  moveBack();
});

const autoForwardBtn = document.querySelector("#auto-forward-btn");
autoForwardBtn.addEventListener("click", () => {
  clearInterval(autoInterval);
  autoInterval = setInterval(moveForward, scondsBetweenSlides * 1000);
});

const autoBackBtn = document.querySelector("#auto-back-btn");
autoBackBtn.addEventListener("click", () => {
  clearInterval(autoInterval);
  autoInterval = setInterval(moveBack, scondsBetweenSlides * 1000);
});

const stopBtn = document.querySelector("#stop-btn");
stopBtn.addEventListener("click", () => {
  clearInterval(autoInterval);
});

let scondsBetweenSlides = 2;

const timeBeweenSlidesInput = document.querySelector("#input");

timeBeweenSlidesInput.addEventListener("input", (e) => {
  let userInputInSeconds = e.target.value;
  if (userInputInSeconds > 0) {
    scondsBetweenSlides = userInputInSeconds;
  }
});

console.log(index);

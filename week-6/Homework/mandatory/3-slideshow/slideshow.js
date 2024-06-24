// Write your code here
let image = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

let autoBEl = document.getElementById("autoB");
let backEl = document.getElementById("back");
let stopEl = document.getElementById("stop");
let forwardEl = document.getElementById("forward");
let autoFEl = document.getElementById("autoF");
let imgEl = document.getElementById("img");

forwardEl.addEventListener("click", manfor);

let i = 0;

function manfor() {
  imgEl.src = image[i];
  if (i < image.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

backEl.addEventListener("click", manbac);

function manbac() {
  imgEl.src = image[i];
  if (i > 0) {
    i--;
  } else {
    i = image.length - 1;
  }
}

autoFEl.addEventListener("click", autoFor);

function autoFor() {
  manfor();

  stopAuto = setTimeout(autoFor, 1000);
}

autoBEl.addEventListener("click", autoBac);

function autoBac() {
  manbac();
  stopAuto = setTimeout(autoBac, 1000);
}

stopEl.addEventListener("click", stop);

function stop() {
  clearTimeout(stopAuto);
}

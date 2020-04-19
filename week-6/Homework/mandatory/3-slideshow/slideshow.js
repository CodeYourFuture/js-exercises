let images = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
];

let treesImg = document.querySelector("#natureImage");
let forwardBtn = document.querySelector("#forward");
let backBtn = document.querySelector("#back");
let autoBackBtn = document.querySelector("#autoBack");
let autoForwardBtn = document.querySelector("#autoForward");
let stopBtn = document.querySelector("#stop");

treesImg.src = images[0];
let index = 0;

let goForward = function () {
  if (index < images.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
  treesImg.src = images[index];
};

let goBack = function () {
  if (index > 0) {
    index -= 1;
  } else {
    index = images.length - 1;
  }
  treesImg.src = images[index];
};

forwardBtn.addEventListener("click", goForward);

backBtn.addEventListener("click", goBack);

let autoBack = autoBackBtn.addEventListener("click", () => {
  setInterval(goBack, 1000);
});

let autoForward = autoForwardBtn.addEventListener("click", () => {
  setInterval(goForward, 1000);
});

let stopInterval = function () {
  location.reload();
};

let stop = stopBtn.addEventListener("click", stopInterval);

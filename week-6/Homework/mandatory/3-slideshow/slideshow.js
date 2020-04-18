// Write your code here
let img1 =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let img2 =
  "https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let img3 =
  "https://images.unsplash.com/photo-1567985872744-60059da06e2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let img4 =
  "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
let i = 0;
let images = [img1, img2, img3, img4];
let bodyEl = document.querySelector("body");
let h1El = document.createElement("h1");
h1El.innerHTML = "IMAGE SLIDESHOWS";
let divEl = document.createElement("div");
let divNumEl = document.createElement("div");
divNumEl.setAttribute("class", "number");
divNumEl.innerHTML = `<em>${i}</em>`;
let imgEl = document.createElement("img");
divEl.appendChild(imgEl);
imgEl.src = images[0];

let backBtnEl = document.createElement("button");
backBtnEl.setAttribute("id", "back");
backBtnEl.innerHTML = "<strong>Back</strong>";

let forwardBtnEl = document.createElement("button");
forwardBtnEl.setAttribute("id", "forward");
forwardBtnEl.innerHTML = "<strong>Forward</strong>";

let autobackBtnEl = document.createElement("button");
autobackBtnEl.setAttribute("id", "autoback");
autobackBtnEl.innerHTML = "<strong>AutoBackward</strong>";
let autoforwardBtnEl = document.createElement("button");
autoforwardBtnEl.setAttribute("id", "autoforward");
autoforwardBtnEl.innerHTML = "<strong>AutoForward</strong>";
let stopBtnEl = document.createElement("button");
stopBtnEl.setAttribute("id", "autoforward");
stopBtnEl.innerHTML = "<strong>Stop</strong>";
let hrEl = document.createElement("hr");
bodyEl.append(
  h1El,
  divEl,
  divNumEl,
  backBtnEl,
  forwardBtnEl,
  autobackBtnEl,
  autoforwardBtnEl,
  stopBtnEl,
  hrEl
);

const goForward = () => {
  i++;

  if (i > images.length - 1) {
    i = 0;
  }
  imgEl.src = images[i];
  divNumEl.innerHTML = `<em>${i}</em>`;
};
const goBackward = () => {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  imgEl.src = images[i];
  divNumEl.innerHTML = `<em>${i}</em>`;
};

const autoForward = () => {
  window.AutoForward = setInterval(goForward, 2000);
};
const autoBackward = () => {
  window.AutoBackward = setInterval(goBackward, 2000);
};
const stop = () => {
  clearInterval(window.AutoForward || window.AutoBackward);
  clearInterval(window.AutoBackward || window.AutoForward);
};

forwardBtnEl.onclick = goForward;
backBtnEl.onclick = goBackward;
autoforwardBtnEl.onclick = autoForward;
autobackBtnEl.onclick = autoBackward;
stopBtnEl.onclick = stop;

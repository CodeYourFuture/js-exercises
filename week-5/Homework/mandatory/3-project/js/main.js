let blueEl = document.getElementById("blueBtn");
let divEl = document.querySelector(".Jumbotron");
let donEl = document.querySelector(".btn-primary.btn-lrg");
let volEl = document.querySelector(".btn-secondary.btn-lrg");

blueEl.addEventListener("click", function () {
  divEl.style.backgroundColor = "#588fbd";
  donEl.style.backgroundColor = "#ffa500";
  volEl.style.backgroundColor = "black";
  volEl.style.color = "White";
});

let orangeEl = document.getElementById("orangeBtn");
// let divEl = document.querySelector(".Jumbotron");
// let donEl = document.querySelector(".btn-primary.btn-lrg");
// let volEl = document.querySelector(".btn-secondary.btn-lrg");

orangeEl.addEventListener("click", function () {
  divEl.style.backgroundColor = "#f0ad4e";
  donEl.style.backgroundColor = "#5751fd";
  volEl.style.backgroundColor = "#31b0d5";
  volEl.style.color = "White";
});

let greenEl = document.getElementById("greenBtn");

greenEl.addEventListener("click", function () {
  divEl.style.backgroundColor = "#87ca8a";
  donEl.style.backgroundColor = "black";
  volEl.style.backgroundColor = "#8c9c08";
  volEl.style.color = "White";
});

let buttonEl = document.querySelector(
  "#content > div.row > div.primary-content.col-lg-8 > form > button"
);

let emailEl = document.querySelector("#exampleInputEmail1");
let yourEl = document.querySelector("#example-text-input");
let describeEl = document.querySelector("#exampleTextarea");
// console.log(emailEl.value);

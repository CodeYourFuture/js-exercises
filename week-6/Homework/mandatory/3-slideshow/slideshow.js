// Write your code here
// var slides = document.querySelectorAll("#slides .slide");
// var slideInterval = setInterval(nextSlide, 2000);

// var currentSlide = 0;

// function nextSlide() {
//   slides[currentSlide].className = "slide";
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].className = "slide showing";
// }

// document.getElementById("autofward").addEventListener("click", nextSlide);

const images = [
  "https://img.freepik.com/free-vector/winter-season-when-snow-is-falling-down_124799-23.jpg?size=626&ext=jpg",

  "https://img.freepik.com/free-photo/snow-covered-trees_1204-101.jpg?size=626&ext=jpg",

  "https://img.freepik.com/free-photo/winter-nature-background-winter-landscape_90791-772.jpg?size=626&ext=jpg",

  "https://i.imgur.com/rFjiRfR.jpg",
];

let i = 0;
const img = document.querySelector("img");
img.src = images[i];
function autoNextFunc() {
  // clearInterval(backInt);
  if (i < images.length - 1) {
    i++;
    img.src = images[i];
  }
}
var slideInterval1 = setInterval(autoNextFunc, 2000);
document.getElementById("autoNext").addEventListener("click", autoNextFunc);
function autoPreviousFunc() {
  // clearInterval(forwardInt);
  if (i > 0) {
    i--;
    img.src = images[i];
  }
}
var slideInterval2 = setInterval(autoPreviousFunc, 2000);
document
  .getElementById("autoPrevious")
  .addEventListener("click", autoPreviousFunc);

// function pause() => {
//   clearInterval(slideInterval1);
//   clearInterval(slideInterval2);
// };
// document.getElementById("stop").addEventListener("click", pause);
next.addEventListener("click", () => {
  if (i < images.length - 1) {
    i++, (img.src = images[i]);
  }
});
previous.addEventListener("click", () => {
  if (i > 0) {
    i--, (img.src = images[i]);
  }
});

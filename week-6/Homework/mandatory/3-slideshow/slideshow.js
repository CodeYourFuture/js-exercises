// Write your code here

let slideIndex = 1;

function plusSlide(n) {
  slideShow((slideIndex += n));
}

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
slideShow(slideIndex);
let intervalId;

let secondsForInterval = 2000;
document.getElementById("inputBtn").addEventListener("click", () => {
  clearInterval(intervalId);
  let inputValue = document.getElementById("input").value;
  console.log(inputValue);
  if (inputValue == 0) {
    secondsForInterval == 2000;
  } else {
    secondsForInterval = inputValue * 1000;
  }
  autoForward();
});

function autoForward() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    slideShow((slideIndex += 1));
  }, secondsForInterval);
}
function autoBackward() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    slideShow((slideIndex -= 1));
  }, secondsForInterval);
}

document.getElementById("autoForward").addEventListener("click", autoForward);
document.getElementById("autoBackward").addEventListener("click", autoBackward);
document.getElementById("Stop").addEventListener("click", () => {
  clearInterval(intervalId);
});

//Active button

let allBtns = document.getElementById("allBtns");
let btns = allBtns.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

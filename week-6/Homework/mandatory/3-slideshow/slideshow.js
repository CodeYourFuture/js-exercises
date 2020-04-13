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
document.getElementById("inputBtn").addEventListener("click", enterSpeed);

function enterSpeed() {
  clearInterval(intervalId);
  let inputValue = document.getElementById("input").value;
  if (inputValue == "") {
    // document.getElementById("input").value = 2;
    alert("You didn't enter any value!");
    let pauseBtn = document.getElementById("Pause");
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    pauseBtn.className += " active";
    clearInterval(intervalId);
  } else {
    secondsForInterval = inputValue * 1000;
    let autoForwardBtn = document.getElementById("autoForward");
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    autoForwardBtn.className += " active";
    autoForward();
  }
}

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
document.getElementById("Pause").addEventListener("click", () => {
  document.getElementById("input").value = "";
  clearInterval(intervalId);
});
document.getElementById("Stop").addEventListener("click", () => {
  document.getElementById("input").value = "";
  clearInterval(intervalId);
  slideIndex = 1;
  slideShow(slideIndex);
  // location.reload();
});

//Active buttons

let allBtns = document.getElementById("allBtns");
let btns = allBtns.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

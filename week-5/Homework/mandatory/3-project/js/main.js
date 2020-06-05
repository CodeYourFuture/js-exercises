//----------------PART-ONE-----------------------------:

let blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", blueMaker);
function blueMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".buttons > a").style.backgroundColor = "#ffa500";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "black";
  volBtn.style.color = "white";
}

let orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", orangeMaker);

function orangeMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".buttons > a").style.backgroundColor = "#5751fd";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "#31b0d5";
  volBtn.style.color = "white";
}

let greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", greenMaker);

function greenMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".buttons > a").style.backgroundColor = "black";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "#8c9c08";
}

//-----------------PART-TWO----------------------------------

let submitButton = document.querySelector("form > button");
let labels = document.querySelectorAll(".form-control");
let mailLabel = document.getElementById("exampleInputEmail1");

function verifyLogin(e) {
  e.preventDefault();
  for (let i = 0; i < labels.length; i++) {
    if ((labels[i].value.length > 0) & mailLabel.value.includes("@")) {
      alert(`Thank you for filling out the form`);
      label[i].value = " ";
    } else {
      labels[i].style.backgroundColor = "red";
    }
  }
}

submitButton.addEventListener("click", verifyLogin);

/*------- Part 1 -------------*/

let blueButton = document.querySelector("#blueBtn");
let jumbotron = document.querySelector(".jumbotron");
let donAndVolBtns = document.querySelectorAll(".btn-lrg");
blueButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#588fbd";
  donAndVolBtns[0].style.backgroundColor = "#ffa500";
  donAndVolBtns[1].style.backgroundColor = "black";
  donAndVolBtns[1].style.color = "white";
});

let orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donAndVolBtns[0].style.backgroundColor = "#5751fd";
  donAndVolBtns[1].style.backgroundColor = "#31b0d5";
  donAndVolBtns[1].style.color = "white";
});

let greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = "#87ca8a";
  donAndVolBtns[0].style.backgroundColor = "black";
  donAndVolBtns[1].style.backgroundColor = "#8c9c08";
});

/*------- Part 2 ------*/

let submitButton = document.querySelectorAll(".btn-primary")[5];
let nameInput = document.querySelector("#example-text-input");
let emailInput = document.querySelector("#exampleInputEmail1");
let textInput = document.querySelector("#exampleTextarea");

submitButton.addEventListener("click", submitButtonFunction, false);

/* Submit button  event Listener function*/

function submitButtonFunction() {
  if (areValidElements()) {
    alert("Thank you for filling this form");
  }

  event.preventDefault();
}

/*Elments validation check function*/

function areValidElements() {
  let isValid = true;
  if (nameInput.value.length < 1) {
    nameInput.style.backgroundColor = "red";
    isValid = false;
  }
  if (emailInput.value.indexOf("@") === -1 || emailInput.value.length < 1) {
    emailInput.style.backgroundColor = "red";
    isValid = false;
  }
  if (textInput.value.length < 1) {
    textInput.style.backgroundColor = "red";
    isValid = false;
  }

  return isValid;
}

var changeColorBlue = document.querySelector("#blueBtn");
changeColorBlue.addEventListener("click", applyChange1);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange1() {
  changeColor.style.backgroundColor = "#588fbd";
  secondChangeColor.children[0].style.backgroundColor = "#ffa500";
  secondChangeColor.children[1].style.backgroundColor = "black";
  secondChangeColor.children[1].style.color = "white";
}
var changeColorOrange = document.querySelector("#orangeBtn");
changeColorOrange.addEventListener("click", applyChange2);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange2() {
  changeColor.style.backgroundColor = "#f0ad4e";
  secondChangeColor.children[0].style.backgroundColor = "#5751fd";
  secondChangeColor.children[1].style.backgroundColor = "31b0d5";
  secondChangeColor.children[1].style.color = "white";
}
var changeColorGreen = document.querySelector("#greenBtn");
changeColorGreen.addEventListener("click", applyChange3);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange3() {
  changeColor.style.backgroundColor = "#87ca8a";
  secondChangeColor.children[0].style.backgroundColor = "#black";
  secondChangeColor.children[1].style.backgroundColor = "#8c9c08";
  secondChangeColor.children[1].style.color = "white";
}
//Part 2

/*function checkInputEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

function checkNone0Input(input) {
  if (input.length > 0) {
    return true;
  } else {
    return false;
  }
}

function getEmailElement() {
  return document.querySelector("#exampleInputEmail1");
}

function checkEmail() {
  var email = getEmailElement();
  var isEmailValid = checkInputEmail(email.value);
  if (!isEmailValid) email.style.backgroundColor = "red";
  return isEmailValid;
}

function submitButtonClick(event) {
  event.preventDefault();
  var isEmailValid = checkEmail();
  if (isEmailValid) return alert("Thank for filling the form");
}
// lines 35 - 65 done at homework club but were completed but with making changes to html file. Informed after that need to do it without making changes. */

var submitBtn = document.querySelector("#submitBtn");
var formControl = document.querySelectorAll(".form.control");
var emailInput = document.querySelector("#exampleInputEmail1");
var nameInput = document.querySelector("#name-input");
var descInput = document.querySelector("#exampleTextarea");

submitBtn.addEventListener(
  "click",
  function(event) {
    event.preventDefault();
    if (emailInput.value.length < 0 || !emailInput.value.includes("@")) {
      emailInput.style.backgroundColor = "red";
    }
    if (nameInput.value.length < 0) {
      nameInput.style.backgroundColor = "red";
    }
    if (descInput.value.length < 0) {
      descInput.style.backgroundColor = "red";
    }
    if (
      emailInput.value.length > 0 &&
      nameInput.value.length > 0 &&
      descInput.value.length > 0 &&
      emailInput.value.includes("@")
    ) {
      alert("Thank you for filling in the form");
      returnDefaults();
    }
  },
  function returnDefaults() {
    nameInput.value = " ";
    emailInput.value = " ";
    descInput.value = " ";
  }
);

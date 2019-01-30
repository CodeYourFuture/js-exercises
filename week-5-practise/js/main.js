/*-------------------------------Part 1------------------------- */
//Defining buttons
var blueBtn = document.querySelector("#blueBtn");
var orangeBtn = document.querySelector("#orangeBtn");
var greenBtn = document.querySelector("#greenBtn");
var jumbotronBackground = document.querySelector(".jumbotron");
var donateBtn = document.querySelector("#donateBtn");
var volunteerBtn = document.querySelector("#volunteerBtn");
//Check append child

blueBtn.addEventListener("click", function() {
  jumbotronBackground.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", function() {
  jumbotronBackground.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});
//
greenBtn.addEventListener("click", function() {
  jumbotronBackground.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = " black ";
});

/*-------------------------------Part 2------------------------- */

var emailInput = document.querySelector("#exampleInputEmail1");
var submitBtn = document.querySelector("#submitBtn");
var nameInput = document.querySelector("#name-input");
var textInput = document.querySelector("#exampleTextarea");

function validateNonEmpty(value) {
  return value.length > 0;
}

function validateEmail(email) {
  return email.includes("@");
}

submitBtn.addEventListener("click", function(event) {
  if (validateEmail(emailInput.value) === false) {
    emailInput.style.backgroundColor = "red";
  } else {
    nameInput.style.backgroundColor = "white";
  }
  if (validateNonEmpty(textInput.value) === false) {
    textInput.style.backgroundColor = " red";
  } else {
    textInput.style.backgroundColor = "white";
  }

  if (validateNonEmpty(nameInput.value) === false) {
    nameInput.style.backgroundColor = "red";
  } else {
    nameInput.style.backgroundColor = "white";
  }
  if (
    validateEmail(emailInput.value) &&
    validateNonEmpty(textInput.value) &&
    validateNonEmpty(nameInput.value)
  ) {
    alert("Thank you for filling this form!");
    window.location.reload();
  }
  event.preventDefault();
});

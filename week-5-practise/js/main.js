var blueButton = document.querySelector("#blueBtn");
var jumbotron = document.querySelector(".jumbotron");
var donateAndVolunteerButtons = document.querySelectorAll(".btn-lrg");
blueButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateAndVolunteerButtons[0].style.backgroundColor = "#ffa500";
  donateAndVolunteerButtons[1].style.backgroundColor = "black";
  donateAndVolunteerButtons[1].style.color = "white";
});

var orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateAndVolunteerButtons[0].style.backgroundColor = "#5751fd";
  donateAndVolunteerButtons[1].style.backgroundColor = "#31b0d5";
  donateAndVolunteerButtons[1].style.color = "white";
});

var greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateAndVolunteerButtons[0].style.backgroundColor = "black";
  donateAndVolunteerButtons[1].style.backgroundColor = "#8c9c08";
});

//Part 2 solution :
var submitButton = document.querySelectorAll(".btn-primary")[5];
var nameTextField = document.querySelector("#example-text-input");
var emailTextField = document.querySelector("#exampleInputEmail1");
var descYourselfTextField = document.querySelector("#exampleTextarea");

submitButton.addEventListener("click", submitButtonFunction, false);

//submit button  event Listener function
function submitButtonFunction() {
  if (areValidElements()) {
    alert("Thank you for filling the form");
  }

  event.preventDefault();
}

//This function to  check if the elments are valid or not
function areValidElements() {
  let isvalid = true;
  if (nameTextField.value.length < 1) {
    nameTextField.style.backgroundColor = "red";
    isvalid = false;
  }
  if (
    emailTextField.value.indexOf("@") === -1 ||
    emailTextField.value.length < 1
  ) {
    emailTextField.style.backgroundColor = "red";
    isvalid = false;
  }
  if (descYourselfTextField.value.length < 1) {
    descYourselfTextField.style.backgroundColor = "red";
    isvalid = false;
  }

  return isvalid;
}

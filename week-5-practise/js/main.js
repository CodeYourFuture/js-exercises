// this action will execute when a user click on the blue button and the effect will only apply to the
//[<div> jumbotron class elements ] in dom Html

var blueButton = document.querySelector("#blueBtn");
var jumbotron = document.querySelector(".jumbotron");
var donateAndVolunteerButtons = document.querySelectorAll(".btn-lrg");
blueButton.addEventListener("click", donateAndVolunteersBlueButton);

//this function will change the  jumbotron class background color  and the class
//button background / style colors

function donateAndVolunteersBlueButton() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateAndVolunteerButtons[0].style.backgroundColor = "#ffa500";
  donateAndVolunteerButtons[1].style.backgroundColor = "black";
  donateAndVolunteerButtons[1].style.color = "white";
}
// this action will execute when a user click on the orange button and the effect will only apply to the
//[<div> jumbotron class elements ] in dom Html

var orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", donateAndVolunteerOrangeButton);

//this function will change the  jumbotron class background color  and the class
//button background / style colors

function donateAndVolunteerOrangeButton() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateAndVolunteerButtons[0].style.backgroundColor = "#5751fd";
  donateAndVolunteerButtons[1].style.backgroundColor = "#31b0d5";
  donateAndVolunteerButtons[1].style.color = "white";
}

// this action will execute when a user click on the green button and the effect will only apply to the
//[<div> jumbotron class elements ] in dom Html

var greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", donateAndVolunteerGreenButton);

//this function will change the  jumbotron class background color  and the class
//button background / style colors

function donateAndVolunteerGreenButton() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateAndVolunteerButtons[0].style.backgroundColor = "black";
  donateAndVolunteerButtons[1].style.backgroundColor = "#8c9c08";
}

//Part 2 solution :

var nameTextField = document.querySelector("#example-text-input");
var emailTextField = document.querySelector("#exampleInputEmail1");
var describeYourselfTextField = document.querySelector("#exampleTextarea");

//This function is to check if the elements are valid or not
function areValidElements() {
  let isvalid = true;
  if (nameTextField.value.length < 1) {
    nameTextField.style.backgroundColor = "red";
    isvalid = false;
  }
  if (
    emailTextField.value.indexOf("@") !== -1 ||
    emailTextField.value.length < 1
  ) {
    emailTextField.style.backgroundColor = "red";
    isvalid = false;
  }
  if (describeYourselfTextField.value.length < 1) {
    describeYourselfTextField.style.backgroundColor = "red";
    isvalid = false;
  }

  return isvalid;
}

// this variable  only execute class btn-primary in index[5] of the html dom element
var submitButton = document.querySelectorAll(".btn-primary")[5];
submitButton.addEventListener("click", submitButtonFunction, false);

//this function will only execute when the set conditions are meant
function submitButtonFunction() {
  if (areValidElements()) {
    alert("Thank you for filling the form");
  } else {
    alert("Information is not valid, please try again");
  }
  event.preventDefault();
}

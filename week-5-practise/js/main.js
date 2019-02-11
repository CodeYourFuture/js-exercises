var bbutton = document.querySelector("#blueBtn");
var jumbotron = document.querySelector(".jumbotron");
var donateAndVounteer = document.querySelectorAll(".btn-lrg");
bbutton.addEventListener("click", changebg1);

function changebg1() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateAndVounteer[0].style.backgroundColor = "#ffa500";
  donateAndVounteer[1].style.backgroundColor = "black";
  donateAndVounteer[1].style.color = "white";
}
var obutton = document.querySelector("#orangeBtn");
obutton.addEventListener("click", changebg2);

function changebg2() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateAndVounteer[0].style.backgroundColor = "#5751fd";
  donateAndVounteer[1].style.backgroundColor = "#31b0d5";
  donateAndVounteer[1].style.color = "white";
}
var gbutton = document.querySelector("#greenBtn");
gbutton.addEventListener("click", changebg3);
function changebg3() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateAndVounteer[0].style.backgroundColor = "#black";
  donateAndVounteer[1].style.backgroundColor = "#8c9c08";
  donateAndVounteer[1].style.color = "white";
}
//part 2
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

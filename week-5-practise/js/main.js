var blueButton = document.querySelector("#blueBtn");
var OrangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

var jumbotron = document.querySelector(".jumbotron");
var donateBtn = document.querySelector(".buttons a:first-child");
var volunteerBtn = document.querySelector(".buttons a:nth-child(2)");

blueButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

OrangeButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

greenButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

/////////////////////////////////////////////////////////////////////////////
var submitBtn = document.querySelector("form button:last-child");
var email = document.querySelector("#exampleInputEmail1");
var yourName = document.querySelector("#example-text-input");
var describe = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  validate();
});

function validate() {
  //email validation
  var atpos = email.value.indexOf("@");
  var dotpos = email.value.lastIndexOf(".");

  if (email.value == "") {
    email.style.backgroundColor = "red";
    alert("Please enter an email");
    email.focus();
    return false;
  }
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.value.length) {
    email.style.backgroundColor = "red";
    alert("Please enter a valid email address");
    email.focus();
    return false;
  }
  //yourName validation
  if (yourName.value == "") {
    yourName.style.backgroundColor = "red";
    alert("Please enter your name");
    yourName.focus();
    return false;
  }
  //describe validation
  if (describe.value == "") {
    describe.style.backgroundColor = "red";
    alert("Please enter description");
    describe.focus();
    return false;
  }
  //event holder function
  if (email.value !== "" && yourName.value !== "" && describe.value !== "") {
    email.style.backgroundColor = "white";
    email.value = "";
    yourName.style.backgroundColor = "white";
    yourName.value = "";
    describe.style.backgroundColor = "white";
    describe.value = "";
    alert("Thank You for filling out the form!")
    return true;
  }
}

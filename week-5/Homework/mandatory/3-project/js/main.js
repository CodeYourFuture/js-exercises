var blueBtn = document.getElementById("blueBtn");
var orangeBtn = document.getElementById("orangeBtn");
var greenBtn = document.getElementById("greenBtn");
var jumbotron = document.querySelector(".jumbotron");
var donateBtn = document.getElementById("donate");
var volunteerBtn = document.getElementById("volunteer");

blueBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#588fbd`;
  donateBtn.style.backgroundColor = `#ffa500`;
  volunteerBtn.style.backgroundColor = `black`;
  volunteerBtn.style.color = `white`;
});

orangeBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateBtn.style.backgroundColor = `#5751fd`;
  volunteerBtn.style.backgroundColor = `#31b0d5`;
  volunteerBtn.style.color = `white`;
});
greenBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateBtn.style.backgroundColor = `black`;
  volunteerBtn.style.backgroundColor = `#8c9c08`;
});

var emailAddress = document.getElementById("exampleInputEmail1");
var yourName = document.getElementById("example-text-input");
var describe = document.getElementById("exampleTextarea");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (submit) {
  submit.preventDefault();
  if (
    emailAddress.value.length > 0 &&
    emailAddress.value.includes("@") &&
    yourName.value.length > 0 &&
    describe.value.length > 0
  ) {
    alert("to thank you for filling out the form");

    emailAddress.value = "";
    yourName.value = "";
    describe.value = "";
  } else if (
    emailAddress.value.length <= 0 ||
    yourName.value.length <= 0 ||
    describe.value.length <= 0
  ) {
    emailAddress.style.backgroundColor = `red`;
    yourName.style.backgroundColor = `red`;
    describe.style.backgroundColor = `red`;
  }
});

let targetBlue = document.getElementById("blueBtn");
let targetOrange = document.getElementById("orangeBtn");
let targetGreen = document.getElementById("greenBtn");

let targetJumbotron = document.querySelector(".jumbotron");
let targetDonateBtn = document.querySelector(".buttons .btn-primary");
let targetVolunteerBtn = document.querySelector(".buttons .btn-secondary");

targetBlue.addEventListener("click", function () {
  targetJumbotron.style.backgroundColor = "#588fbd";
  targetDonateBtn.style.backgroundColor = "#ffa500";
  targetVolunteerBtn.style.backgroundColor = "black";
  targetVolunteerBtn.style.color = "white";
});

targetOrange.addEventListener("click", function () {
  targetJumbotron.style.backgroundColor = "#f0ad4e";
  targetDonateBtn.style.backgroundColor = "#5751fd";
  targetVolunteerBtn.style.backgroundColor = "#31b0d5";
  targetVolunteerBtn.style.color = "white";
});

targetGreen.addEventListener("click", function () {
  targetJumbotron.style.backgroundColor = "#87ca8a";
  targetDonateBtn.style.backgroundColor = "black";
  targetVolunteerBtn.style.backgroundColor = "#8c9c08";
});

let targetSubmit = document.querySelector("form button");
let targetEmail = document.querySelector("div #exampleInputEmail1");
let targetName = document.querySelector("div #example-text-input");
let targetDescribeYourself = document.querySelector("div #exampleTextarea");

let emailExpression = /[a-z0-9][@.]/;

targetSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  validateAll() ? alert("thank you") : alert("no");
});

function validateAll() {
  targetEmail.value.length > 0 && emailExpression.test(targetEmail.value)
    ? (targetEmail.value = "")
    : (targetEmail.style.backgroundColor = "red");
  targetName.value.length > 0
    ? (targetName.value = "")
    : (targetName.style.backgroundColor = "red");
  targetDescribeYourself.value.length > 0
    ? (targetDescribeYourself.value = "")
    : (targetDescribeYourself.style.backgroundColor = "red");
}

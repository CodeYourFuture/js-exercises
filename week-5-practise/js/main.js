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

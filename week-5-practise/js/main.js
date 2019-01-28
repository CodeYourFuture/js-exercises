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
greenBtn.addEventListener("click", function() {
  jumbotronBackground.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = " black ";
});

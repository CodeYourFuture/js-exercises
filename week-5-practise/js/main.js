var myButton = document.querySelector("#blueBtn");
var jumbotronBackground = document.querySelector(".jumbotron");
var donateBtn = document.querySelector("#donateBtn");
var volunteerBtn = document.querySelector("#volunteerBtn");
//Check append child

myButton.addEventListener("click", changeColor);

function changeColor() {
  jumbotronBackground.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
}

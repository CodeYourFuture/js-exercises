var blueBtn = document.querySelector("#blueBtn");

var jumbotron = document.querySelector(".jumbotron");

var donateAndVolunteerBtns = document.querySelectorAll(".btn-lrg");

blueBtn.addEventListener("click", changeBlueColor);

function changeBlueColor() {

  jumbotron.style.backgroundColor = "#588fbd";

  donateAndVolunteerBtns[0].style.backgroundColor = "#ffa500";

  donateAndVolunteerBtns[1].style.backgroundColor = "black";

  donateAndVolunteerBtns[1].style.color = "white";
};

var orangeBtn = document.querySelector("#orangeBtn");

orangeBtn.addEventListener("click", changeOrangeColor);

function changeOrangeColor() {

  jumbotron.style.backgroundColor = "#f0ad4e";

  donateAndVolunteerBtns[0].style.backgroundColor = "#5751fd";

  donateAndVolunteerBtns[1].style.backgroundColor = "#31b0d5";

  donateAndVolunteerBtns[1].style.color = "white";
};
var greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener("click", changeGreenColor)
function changeGreenColor() {

  jumbotron.style.backgroundColor = "#87ca8a";

  donateAndVolunteerBtns[0].style.backgroundColor = "black";

  donateAndVolunteerBtns[1].style.backgroundColor = "#8c9c08";
};


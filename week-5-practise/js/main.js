var blueButton = document.querySelector("#blueBtn");
var jumbrotron = document.querySelector(".jumbotron");
var donateBikeAndVolunteer = document.querySelectorAll(".btn-lrg");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

/*function changeColor(a, b, c) {
  jumbrotron.style.backgroundColor = "a";
  donateBikeAndVolunteer[0].style.backgroundColor = "b";
  donateBikeAndVolunteer[1].style.backgroundColor = "c";
  donateBikeAndVolunteer[1].style.color = "white";
}*/

function onBlueButtonClick() {
  jumbrotron.style.backgroundColor = "#588fbd";
  donateBikeAndVolunteer[0].style.backgroundColor = "#ffa500";
  donateBikeAndVolunteer[1].style.backgroundColor = "black";
  donateBikeAndVolunteer[1].style.color = "white";
}

blueButton.addEventListener("click", onBlueButtonClick);

/*blueButton.addEventListener(
  "click",
  changeColor("#588fbd", "#ffa500", black)
);
orangeButton.addEventListener(
  "click",
  changeColor("#f0ad4e", "#5751fd", "b#31b0d5")
);
greenButton.addEventListener(
  "click",
  changeColor("#87ca8a", "black", "#8c9c08")
);*/

function onOrangeButtonClick() {
  jumbrotron.style.backgroundColor = "#f0ad4e";
  donateBikeAndVolunteer[0].style.backgroundColor = "#5751fd";
  donateBikeAndVolunteer[1].style.backgroundColor = "#31b0d5";
  donateBikeAndVolunteer[1].style.color = "white";
}
orangeButton.addEventListener("click", onOrangeButtonClick);

function onGreenButtonClick() {
  jumbrotron.style.backgroundColor = "#87ca8a";
  donateBikeAndVolunteer[0].style.backgroundColor = "black";
  donateBikeAndVolunteer[1].style.backgroundColor = "#8c9c08";
  donateBikeAndVolunteer[1].style.color = "white";
}
greenButton.addEventListener("click", onGreenButtonClick);

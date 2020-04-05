Blue button
const jumbotronBackground = document.querySelector(".jumbotron");
const donateAbikeButton = document.querySelector(".btn-lrg");
const blueButton = document.querySelector("#blueBtn");
const volunteryButton = document.querySelector(".btn-secondary");
blueButton.addEventListener("click", changeBackgroundToBlue);

function changeBackgroundToBlue() {
  jumbotronBackground.style.backgroundColor = "#588fbd";
  donateAbikeButton.style.backgroundColor = "#ffa500";
  volunteryButton.style.backgroundColor = `black`;
  volunteryButton.style.color = `white`;
}

Orange button
const jumbotronBackground = document.querySelector(".jumbotron");
const donateAbikeButton = document.querySelector(".btn-lrg");
const orangeButton = document.querySelector("#orangeBtn");
const volunteryButton = document.querySelector("#btn-secondary");

orangeButton.addEventListener("click", changeBackgroundToOrange);

function changeBackgroundToOrange() {
  jumbotronBackground.style.backgroundColor = `#f0ad4e`;
  donateAbikeButton.style.backgroundColor = `#5751fd`;
  volunteryButton.style.backgroundColor = `#31b0d5`;
  volunteryButton.style.color = `white`;
}
Green button
const jumbotronBackground = document.querySelector(".jumbotron");
const donateAbikeButton = document.querySelector(".btn-lrg");
const volunteryButton = document.querySelector("#btn-secondary");
const greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", changeBackgroundToGreen);

function changeBackgroundToGreen() {
  jumbotronBackground.style.backgroundColor = `#87ca8a`;
  donateAbikeButton.style.backgroundColor = `black`;
  volunteryButton.style.backgroundColor = `#8c9c08`;
}
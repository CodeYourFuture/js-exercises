// part 1
//blue button style
let blueBtn = document.getElementById("blueBtn");
let jumbotron = document.querySelector(".jumbotron");
let donateBikeBtn = document.querySelector("#donateBikeBtn");
let volunteerBtn = document.querySelector("#volunteerBtn");
let changeBackgroundColorBlueBtn = () =>
  (jumbotron.style.backgroundColor = "#588fbd") +
  (donateBikeBtn.style.backgroundColor = "#ffa500") +
  (volunteerBtn.style.backgroundColor = "black") +
  (volunteerBtn.style.color = "white");
blueBtn.addEventListener("click", changeBackgroundColorBlueBtn);

//Orange button style
let orangeBtn = document.getElementById("orangeBtn");
let changeBackgroundColorOrangeBtn = () =>
  (jumbotron.style.backgroundColor = "#f0ad4e") +
  (donateBikeBtn.style.backgroundColor = "#5751fd") +
  (volunteerBtn.style.backgroundColor = "#31b0d5") +
  (volunteerBtn.style.color = "white");
orangeBtn.addEventListener("click", changeBackgroundColorOrangeBtn);

//Green button style
let greenBtn = document.getElementById("greenBtn");
let changeBackgroundColorGreenBtn = () =>
  (jumbotron.style.backgroundColor = "#87ca8a") +
  (donateBikeBtn.style.backgroundColor = "black") +
  (volunteerBtn.style.backgroundColor = "#8c9c08`");
greenBtn.addEventListener("click", changeBackgroundColorGreenBtn);

//part 2

let submitBtn = document.getElementById("submitBtn"); // the element I want the event on
let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let describeYourself = document.getElementById("exampleTextarea");

let onButtonClicks = function () {
  event.preventDefault();

  if (emailInput.value.length <= 0) {
    emailInput.style.backgroundColor = "red";
  }
  if (nameInput.value.length <= 0) {
    nameInput.style.backgroundColor = "red";
  }
  if (describeYourself.value.length <= 0) {
    describeYourself.style.backgroundColor = "red";
  }
  if (!emailInput.value.includes("@")) {
    alert("please add a @ to your email address");
  } else {
    alert("thank you for filling out the form");
  }
};

submitBtn.addEventListener("click", onButtonClicks);

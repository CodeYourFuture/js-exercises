//Part 1

let blueButton = document.getElementById("blueBtn");
let jumbotronEl = document.querySelector(".jumbotron");
let donateBike = document.getElementsByClassName("btn-lrg")[0];
let volunteerButton = document.getElementsByClassName("btn-lrg")[1];

blueButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#588fbd";
  donateBike.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

//

let orangeButton = document.getElementById("orangeBtn");

orangeButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#f0ad4e";
  donateBike.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
});

//

let greenButton = document.getElementById("greenBtn");

greenButton.addEventListener("click", function () {
  jumbotronEl.style.backgroundColor = "#87ca8a";
  donateBike.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});

// Part 2

let email = document.getElementById("exampleInputEmail1");
let name = document.getElementById("example-text-input");
let textarea = document.getElementById("exampleTextarea");
let submitButton = document.querySelector("form > button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (email.value.length <= 0 || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
  } else if (name.value.length === 0) {
    name.style.backgroundColor = "red";
  } else if (textarea.value.length === 0) {
    textarea.style.backgroundColor = "red";
    textarea.placeholder = "Enter some text";
  } else {
    alert("Thank you for filling this form");
  }
});

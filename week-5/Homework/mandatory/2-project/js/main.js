// blue btn
let blueStyle = document.querySelector("#blueBtn");
blueStyle.addEventListener("click", changeStyleBlue);

function changeStyleBlue() {
  let newBackground = document.querySelector(".jumbotron");
  newBackground.style.backgroundColor = `#588fbd`;
  let newDonateBtn = document.querySelector(".buttons .btn-primary");
  newDonateBtn.style.backgroundColor = `#ffa500`;
  let newVolBtn = document.querySelector(".buttons .btn-secondary");
  newVolBtn.style.backgroundColor = "black";
  newVolBtn.style.color = "white";
}

// orange btn
let orangeStyle = document.querySelector("#orangeBtn");
orangeStyle.addEventListener("click", changeStyleOrange);

function changeStyleOrange() {
  document.querySelector(".jumbotron").style.backgroundColor = `#f0ad4e`;
  document.querySelector(
    ".buttons .btn-primary"
  ).style.backgroundColor = `#5751fd`;
  document.querySelector(
    ".buttons .btn-secondary"
  ).style.backgroundColor = `#31b0d5`;
  document.querySelector(".buttons .btn-secondary").style.color = `white`;
}

// green btn
let greenStyle = document.querySelector("#greenBtn");
greenStyle.addEventListener("click", changeStyleGreen);

function changeStyleGreen() {
  document.querySelector(".jumbotron").style.backgroundColor = `#87ca8a`;
  document.querySelector(
    ".buttons .btn-primary"
  ).style.backgroundColor = `black`;
  document.querySelector(
    ".buttons .btn-secondary"
  ).style.backgroundColor = `#8c9c08`;
}

//part 2
let submit = document.querySelector("form button");
submit.addEventListener("click", submitting);

function submitting() {
  let email = document.querySelector("#exampleInputEmail1");
  let name = document.querySelector("#example-text-input");
  let describeField = document.querySelector("#exampleTextarea");
  if (email.value.length === 0 || !email.value.includes("@")) {
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "black";
  }

  if (name.value.length === 0) {
    name.style.borderColor = "red";
  } else {
    name.style.borderColor = "black";
  }

  if (describeField.value.length === 0) {
    describeField.style.borderColor = "red";
  } else {
    describeField.style.borderColor = "black";
  }

  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    email.value.includes("@") &&
    describeField.value.length > 0
  ) {
    alert("Thank you for filling out the form");
    email.value = "";
    name.value = "";
    describeField.value = "";
  }

  event.preventDefault();
}

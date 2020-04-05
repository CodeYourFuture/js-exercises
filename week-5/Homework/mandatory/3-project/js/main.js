const jumbotron = document.querySelector(".jumbotron");
const donateABike = document.querySelector(".buttons > .btn-primary");
const volunteer = document.querySelector(".buttons > .btn-secondary");

const blueBtn = document.getElementById("blueBtn");

blueBtn.addEventListener("click", changeThemeToBlue);

function changeThemeToBlue() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateABike.style.backgroundColor = "#ffa500";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
}

const orangeBtn = document.getElementById("orangeBtn");

orangeBtn.addEventListener("click", changeThemeToOrange);

function changeThemeToOrange() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateABike.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
}

const greenBtn = document.getElementById("greenBtn");

greenBtn.addEventListener("click", changeThemeToGreen);

function changeThemeToGreen() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateABike.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08";
  volunteer.style.color = "white";
}

const submitBtn = document.querySelector("form button");

const formControl = document.querySelectorAll(".form-control");

const emailArea = document.querySelector("#exampleInputEmail1");
const nameArea = document.querySelector("#example-text-input");
const textArea = document.querySelector("#exampleTextarea");

const formEl = document.querySelector("form");

submitBtn.addEventListener("click", checkValidity);

function checkValidity(event) {
  event.preventDefault();
  formControl.forEach(form => {
    if (!form.value > 0) {
      form.style.backgroundColor = "red";
    }
  });
  if (
    emailArea.value.length > 0 &&
    nameArea.value.length > 0 &&
    textArea.value.length > 0
  ) {
    alert("Thank you!");
    formEl.reset();
  }
}

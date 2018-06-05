var btnBlue = document.querySelector("#blueBtn");
var btnOrange = document.querySelector("#orangeBtn");
var btnGreen = document.querySelector("#greenBtn");

var bgJumbotron = document.querySelector(".primary-content .jumbotron");
var bikeDonate = document.querySelector(".primary-content .btn-primary");
var volunteerButton = document.querySelector(".primary-content .btn-secondary");

btnBlue.addEventListener("click", function() {
  bgJumbotron.style.backgroundColor = "#588fbd";
  bikeDonate.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

btnOrange.addEventListener("click", function() {
  bgJumbotron.style.backgroundColor = "#f0ad4e";
  bikeDonate.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
});

btnGreen.addEventListener("click", function() {
  bgJumbotron.style.backgroundColor = "#87ca8a";
  bikeDonate.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
});

var btnSubmit = document.querySelector("form button");
var formName = document.querySelector("#example-text-input");
var formComment = document.querySelector("#exampleTextarea");
var formMail = document.querySelector("#exampleInputEmail1");

var allFields = document.querySelectorAll("form .form-control");

btnSubmit.addEventListener("click", function() {
  event.preventDefault();

  var formError = false;

  if (formName.value.length == 0) {
    formName.style.backgroundColor = "red";
    formError = true;
  }
  if (formComment.value.length == 0) {
    formComment.style.backgroundColor = "red";
    formError = true;
  }
  if (formMail.value.length == 0) {
    formMail.style.backgroundColor = "red";
    formError = true;
  }

  if (!formMail.value.includes("@")) {
    formMail.style.backgroundColor = "red";
    formError = true;
  }

  if (formError == false) {
    alert("Thank you for filling out the form");
    allFields.forEach(x => {
      x.value = "";
      x.style.backgroundColor = "white";
    });
  }
});

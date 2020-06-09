var blueBtn = document.getElementById("blueBtn");
var orangeBtn = document.getElementById("orangeBtn");
var greenBtn = document.getElementById("greenBtn");
var jumbotron = document.querySelector(".jumbotron");
var donate = document.getElementById("donate");
var volunteer = document.getElementById("Volunteer");

blueBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#588fbd`;
  donate.style.backgroundColor = `#ffa500`;
  volunteer.style.backgroundColor = `black`;
  volunteer.style.color = `white`;
});

orangeBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donate.style.backgroundColor = `#5751fd`;
  volunteer.style.backgroundColor = `#31b0d5`;
  volunteer.style.color = `white`;
});

greenBtn.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donate.style.backgroundColor = `black`;
  volunteer.style.backgroundColor = `#8c9c08`;
});

var submitBtn = document.getElementById("submitBtn");
var emailBtn = document.getElementById("exampleInputEmail1");
var yourName = document.getElementById("example-text-input");
var describeYourself = document.getElementById("exampleTextarea");

function pressSubmitBtn(submit) {
  if (
    emailBtn.value.length > 0 &&
    emailBtn.value.includes("@") &&
    yourName.value.length > 0 &&
    describeYourself.value.length > 0
  ) {
    submit.preventDefault();
    alert("Thanks for filling out the form!");
    emailBtn.value = "";
    nameBtn.value = "";
    describtionBtn.value = "";
  } else if (
    emailBtn.value.length <= 0 ||
    (yourName.value.length <= 0 && describeYourself.value.length <= 0)
  ) {
    emailBtn.style.backgroundColor = `red`;
    yourName.style.backgroundColor = `red`;
    describeYourself.style.backgroundColor = `red`;
  }
}
submitBtn.addEventListener("click", pressSubmitBtn);

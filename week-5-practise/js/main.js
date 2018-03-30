var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "#ffa500";
  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "black";
  document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});
var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "#5751fd";
  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#31b0d5";
  document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});
var greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", function() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "black";
  document.querySelector(".jumbotron .btn-secondary").style.color = "#8c9c08";
});

var submitBtn = document.querySelector("form .btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#exampleInputEmail1");
  var name = document.querySelector("#example-text-input");
  var describe = document.querySelector("#exampleTextarea");
  var invalid = false;

  if (email.value.length == 0) {
    email.style.backgroundColor = "red";
    invalid = true;
  }
  if (name.value.length == 0) {
    name.style.backgroundColor = "red";
    invalid = true;
  }
  if (describe.value.length == 0) {
    describe.style.backgroundColor = "red";
    invalid = true;
  }
  if (email.value.indexOf("@") == -1) {
    email.style.backgroundColor = "red";
    invalid = true;
  }
  if (!invalid) {
    alert("Thank you for filling in this form!");

    // email.style.backgroundColor = "white";
    // name.style.backgroundColor = "white";
    // describe.style.backgroundColor = "white";

    email.value = "";
    name.value = "";
    describe.value = "";
  }
});

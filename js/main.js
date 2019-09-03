// Part 1

var blueChange = document.querySelector("#blueBtn");
console.log(blueChange);
var onClickBlue = function() {
  // document.getElementById("donateBtn").style.backgroundColor = "#ce5f31";
  document.getElementById("volunteerBtn").style.backgroundColor = "black";
  document.getElementById("volunteerBtn").style.color = "white";
  document.getElementById("jumbotron").style.backgroundColor = "#588fbd";
  var x = document.getElementsByClassName("btn btn-primary btn-lrg");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#ce5f31";
  }
};

blueChange.addEventListener("click", onClickBlue);

var orangeChange = document.getElementById("orangeBtn");
var onClickOrange = function() {
  document.getElementById("donateBtn").style.backgroundColor = "#5751fd";
  document.getElementById("volunteerBtn").style.backgroundColor = "#31b0d5";
  document.getElementById("volunteerBtn").style.color = "white";
  document.getElementById("jumbotron").style.backgroundColor = "#f0ad4e";
};

orangeChange.addEventListener("click", onClickOrange);

var greenChange = document.getElementById("greenBtn");
var onClickGreen = function() {
  document.getElementById("donateBtn").style.backgroundColor = "black";
  document.getElementById("volunteerBtn").style.backgroundColor = "#8c9c08";
  document.getElementById("jumbotron").style.backgroundColor = "#87ca8a";
};

greenChange.addEventListener("click", onClickGreen);

var submitButton = document.querySelector("#submitBtn");
var onSubmitClick = function() {
  var writeYourEmail = document.getElementById("exampleInputEmail1").value;
  function checkEmail(email) {
    if (email.length > 0 && email.includes("@")) {
      event.preventDefault();
      return email;
    } else {
      return (document.getElementById(
        "exampleInputEmail1"
      ).style.backgroundColor = "red");
    }
  }
  checkEmail(writeYourEmail);
  var writeYourName = document.getElementById("example-text-input").value;
  function checkName(name) {
    if (name.length > 0) {
      event.preventDefault();
      return "";
    } else {
      return (document.getElementById(
        "example-text-input"
      ).style.backgroundColor = "red");
    }
  }
  checkName(writeYourName);
  var writeYourDescription = document.getElementById("exampleTextarea").value;
  function checkDescription(descr) {
    if (descr.length > 0) {
      event.preventDefault();
      return descr;
    } else {
      return (document.getElementById("exampleTextarea").style.backgroundColor =
        "red");
    }
  }
  checkDescription(writeYourDescription);
  function verifyAll(value1, value2, value3) {
    if (
      value1.length > 0 &&
      value1.includes("@") &&
      value2.length > 0 &&
      value3.length > 0
    ) {
      alert("thank you for filling out the form!");
      document.getElementById("exampleInputEmail1").value = "";
      document.getElementById("example-text-input").value = "";
      document.getElementById("exampleTextarea").value = "";
    }
    // document.getElementById("exampleTextarea").reset();
    //var ul = document.getElementById("exampleTextarea");
    //while (ul.hasChildNodes()) {
    //ul.removeChild(ul.lastChild);
  }
  verifyAll(writeYourEmail, writeYourName, writeYourDescription);
};
submitButton.addEventListener("click", onSubmitClick);

console.log("test");

var myBlueBtn = document.getElementById("blueBtn");
myBlueBtn.addEventListener("click", changeBlue, true);

function changeBlue() {
  //   alert("Blue Button Clicked");
  var myDiv = document.querySelector(".Jumbotron");
  myDiv.style.backgroundColor = "#588fbd";

  var myBtn1 = document.querySelector(".btn.btn-primary.btn-lrg");
  myBtn1.style.backgroundColor = "#ffa500";
  //
  var myBtn2 = document.querySelector(".btn.btn-secondary.btn-lrg");
  myBtn2.style.backgroundColor = "black";
  myBtn2.style.color = "white";
  //   myBtn1.TEXT_NODE.style.backgroundColor = "white";
}
var myOrangeBtn = document.getElementById("orangeBtn");
myOrangeBtn.addEventListener("click", changeOrange, true);

function changeOrange() {
  //   alert("Blue Button Clicked");
  var myDiv = document.querySelector(".Jumbotron");
  myDiv.style.backgroundColor = "#f0ad4e";

  var myBtn1 = document.querySelector(".btn.btn-primary.btn-lrg");
  myBtn1.style.backgroundColor = "#5751fd";
  //

  var myBtn2 = document.querySelector(".btn.btn-secondary.btn-lrg");
  myBtn2.style.backgroundColor = "#31b0d5";
  myBtn2.style.color = "white";
}

var myGreenBtn = document.getElementById("greenBtn");
myGreenBtn.addEventListener("click", changeGreen, true);

function changeGreen() {
  //   alert("Blue Button Clicked");
  var myDiv = document.querySelector(".Jumbotron");
  myDiv.style.backgroundColor = "#87ca8a";

  var myBtn1 = document.querySelector(".btn.btn-primary.btn-lrg");
  myBtn1.style.backgroundColor = "black";
  //

  var myBtn2 = document.querySelector(".btn.btn-secondary.btn-lrg");
  myBtn2.style.backgroundColor = "#8c9c08";
}

var submitBtn = document.querySelectorAll(".btn.btn-primary")[5];
submitBtn.addEventListener("click", submitInfo, true);

function submitInfo() {
  emailField = document.getElementById("exampleInputEmail1");
  nameField = document.getElementById("example-text-input");
  descField = document.getElementById("exampleTextarea");

  if (
    emailField.value.length > 0 &&
    emailField.value.indexOf("@") > 0 &&
    nameField.value.length > 0 &&
    descField.value.length > 0
  ) {
    alert("thank you for filling out the form");
    emailField.value = "";
    nameField.value = "";
    descField.value = "";
    nameField.style.backgroundColor = "white";
    emailField.style.backgroundColor = "white";
    descField.style.backgroundColor = "white";
  } else {
    if (emailField.value.length === 0 && emailField.value.indexOf("@") < 0) {
      emailField.style.backgroundColor = "red";
    }
    if (nameField.value.length === 0) {
      nameField.style.backgroundColor = "red";
    }
    if (descField.value.length === 0) {
      descField.style.backgroundColor = "red";
    }
  }
}

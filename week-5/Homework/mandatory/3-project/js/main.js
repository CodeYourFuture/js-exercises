// Part one :

var TheDiv = document.getElementsByClassName("Jumbotron")[0];
var TheBtn = document.getElementById("blueBtn");
var Donate = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
var Volnteer = document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
console.log(TheDiv);

TheBtn.addEventListener("click", function () {
  TheDiv.style.backgroundColor = "#588fbd";
  Donate.style.backgroundColor = "#ffa500";
  Volnteer.style.backgroundColor = "black";
});

var TheBtn = document.getElementById("orangeBtn");

TheBtn.addEventListener("click", function () {
  TheDiv.style.backgroundColor = "#f0ad4e";
  Donate.style.backgroundColor = "#5751fd";
  Volnteer.style.backgroundColor = "#31b0d5";
});

var TheBtn = document.getElementById("greenBtn");

TheBtn.addEventListener("click", function () {
  TheDiv.style.backgroundColor = "#87ca8a";
  Donate.style.backgroundColor = "black";
  Volnteer.style.backgroundColor = "#8c9c08";
});

// Part two :
var TheSubmmit = document.getElementsByTagName("button")[4];
var TheEmail = document.getElementById("exampleInputEmail1");
var TheName = document.getElementById("example-text-input");
var TheDescribe = document.getElementById("exampleTextarea");
TheSubmmit.addEventListener("click", function (event) {
  event.preventDefault();
  //TheEmail check
  if (TheEmail.value.length <= 0 || !TheEmail.value.includes("@")) {
    TheEmail.style.backgroundColor = "red";
  } else {
    TheEmail.style.backgroundColor = "white";
  }
  //TheName check
  if (TheName.value.length <= 0) {
    TheName.style.backgroundColor = "red";
  } else {
    TheName.style.backgroundColor = "white";
  }

  //TheDescribe check
  if (TheDescribe.value.length <= 0) {
    TheDescribe.style.backgroundColor = "red";
  } else {
    TheDescribe.style.backgroundColor = "white";
  }

  //check All

  if (
    TheEmail.style.backgroundColor == "white" &&
    TheName.style.backgroundColor == "white" &&
    TheDescribe.style.backgroundColor == "white"
  ) {
    alert("Thank you for filling out the form");
    TheEmail.value = "";
    TheName.value = "";
    TheDescribe.value = "";
  }
});

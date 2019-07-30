// Part 1
var myButton = document.querySelector("#blueBtn");
myButton.addEventListener("click", changeColor);
function changeColor() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.getElementById("donate").style.backgroundColor = "#ffa500";
  document.getElementById("volunt").style.backgroundColor = "white";
}

var myButton2 = document.querySelector("#orangeBtn");
myButton2.addEventListener("click", changeColor2);
function changeColor2() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.getElementById("donate").style.backgroundColor = "#5751fd";
  document.getElementById("volunt").style.backgroundColor = "#31b0d5";
  document.getElementById("volunt").style.color = "white";
}

var myButton3 = document.querySelector("#greenBtn");
myButton3.addEventListener("click", changeColor3);
function changeColor3() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.getElementById("donate").style.backgroundColor = "black";
  document.getElementById("volunt").style.backgroundColor = "#8c9c08";
}
// Part 2

var submit = document.getElementById("submit");
submit.addEventListener("click", validation);

function markRed(input) {
  input.style.backgroundColor = "red";
}
var name = document.getElementById("example-text-input");
var email = document.getElementById("exampleInputEmail1");
var text = document.getElementById("exampleTextarea");
var array = [name, email, text];

function validation() {
  event.preventDefault();

  array.forEach(input => {
    if (input.value.length == 0) {
      markRed(input);
    }
  });
  if (!email.value.includes("@")) {
    markRed(input);
  }

  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    email.value.includes("@") &&
    text.value.length > 0
  ) {
    alert("Thanks for filling out the form!");
    array.forEach(input => {
      input.value = "";
      input.style.backgroundColor = "white";
    });
  }
}

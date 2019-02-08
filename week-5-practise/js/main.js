/*var changeColorBlue = document.querySelector("#blueBtn");
changeColorBlue.addEventListener("click", applyChange1);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange1() {
  changeColor.style.backgroundColor = "#588fbd";
  secondChangeColor.children[0].style.backgroundColor = "#ffa500";
  secondChangeColor.children[1].style.backgroundColor = "black";
  secondChangeColor.children[1].style.color = "white";
}

var changeColorOrange = document.querySelector("#orangeBtn");
changeColorOrange.addEventListener("click", applyChange2);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange2() {
  changeColor.style.backgroundColor = "#f0ad4e";
  secondChangeColor.children[0].style.backgroundColor = "#5751fd";
  secondChangeColor.children[1].style.backgroundColor = "#31b0d5";
  secondChangeColor.children[1].style.color = "white";
}

var changeColorGreen = document.querySelector("#greenBtn");
changeColorGreen.addEventListener("click", applyChange3);
var changeColor = document.querySelector(".jumbotron");
var secondChangeColor = document.querySelector(".buttons");

function applyChange3() {
  changeColor.style.backgroundColor = "#87ca8a";
  secondChangeColor.children[0].style.backgroundColor = "#black";
  secondChangeColor.children[1].style.backgroundColor = "#8c9c08";
}
*/
var form = document.getElementsByTagName("form")[0];
var submitBtn = document.querySelector("button[type=submit]");
var inputOne = document.querySelector("#exampleInputEmail1");
var textInputs = document.querySelectorAll(".form-control");
console.log(textInputs);
submitBtn.addEventListener("click", validateForm, false);

function validateForm() {
  textInputs.forEach(input => {
    console.log(input);
    if (input.value.length === 0) {
      input.style.backgroundColor = "red";
    }
    if (input.type === "email") {
      if (!input.value.includes("@")) {
        input.style.backgroundColor = "red";
      }
    }
  });
  event.preventDefault();
}

// var a = this[0].value;
// var b = this.forms["Form"][1].value;
// var c = this.forms["Form"][2].value;
// if (
//   (a == null || a == "",
//   b == null || b == "",
//   c == null || c == "",
//   d == null || d == "")
// ) {
//   alert("Please Fill All Required Field");
//   return false;
// }

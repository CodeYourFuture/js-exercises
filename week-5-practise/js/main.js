var changeColorBlue = document.querySelector("#blueBtn");
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

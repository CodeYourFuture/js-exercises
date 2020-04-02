let btnBlue = document.querySelector("#blueBtn");
btnBlue.addEventListener("click", ChangeColor);
function ChangeColor() {
  document.querySelector(".jumbotron").style.background = "#588FBD";
  document.querySelector(".buttons .btn-primary").style.background = "#FFA500";
  document.querySelector(".buttons .btn-secondary").style.background = "black";
  document.querySelector(".buttons .btn-secondary").style.color = "white";
}

let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", ChangeColor1);
function ChangeColor1() {
  document.querySelector(".jumbotron").style.background = "#f0ad4e";
  document.querySelector(".buttons .btn-primary").style.background = "#5751fd";
  document.querySelector(".buttons .btn-secondary").style.background =
    "#31b0d5";
  document.querySelector(".buttons .btn-secondary").style.color = "white";
}

let grnBtn = document.querySelector("#greenBtn");
grnBtn.addEventListener("click", ChangeColor2);
function ChangeColor2() {
  document.querySelector(".jumbotron").style.background = "#87ca8a";
  document.querySelector(".buttons .btn-primary").style.background = "black";
  document.querySelector(".buttons .btn-secondary").style.background =
    "#8c9c08";
}

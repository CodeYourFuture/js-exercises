// PART-1

// Clicking on the buttons should change the "theme" of the website

// Blue Button

let btnBlue = document.querySelector("#blueBtn");
btnBlue.addEventListener("click", ChangeColor);
function ChangeColor() {
  document.querySelector(".jumbotron").style.background = "#588FBD";
  document.querySelector(".buttons .btn-primary").style.background = "#FFA500";
  document.querySelector(".buttons .btn-secondary").style.background = "black";
  document.querySelector(".buttons .btn-secondary").style.color = "white";
}
// Orange Button

let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", ChangeColor1);
function ChangeColor1() {
  document.querySelector(".jumbotron").style.background = "#f0ad4e";
  document.querySelector(".buttons .btn-primary").style.background = "#5751fd";
  document.querySelector(".buttons .btn-secondary").style.background =
    "#31b0d5";
  document.querySelector(".buttons .btn-secondary").style.color = "white";
}

// Green Button
let grnBtn = document.querySelector("#greenBtn");
grnBtn.addEventListener("click", ChangeColor2);
function ChangeColor2() {
  document.querySelector(".jumbotron").style.background = "#87ca8a";
  document.querySelector(".buttons .btn-primary").style.background = "black";
  document.querySelector(".buttons .btn-secondary").style.background =
    "#8c9c08";
}
//PART-2
// When the submit button is pressed, it should check that all the form fields are valid:

let submitBtn = document.querySelector("form .btn");
submitBtn.addEventListener("click", CheckForm);
function CheckForm(e) {
  e.preventDefault();
  let email = document.querySelector("#exampleInputEmail1");
  let name = document.querySelector("#example-text-input");
  let describe = document.querySelector("#exampleTextarea");
  let form = [email, name, describe];
  let a = !email.value.length > 0 || !email.value.includes("@");
  let b = !name.value.length > 0;
  let c = !describe.value.length > 0;
  let abc = [a, b, c];
  for (i = 0; i < abc.length; i++) {
    if (abc[i]) {
      form[i].style.background = "red";
    }
  }
  if (!a && !b && !c) {
    alert("Thank you for filling out the form");
    document.querySelector("form").reset();
  }
}

// PART-1

// Clicking on the buttons should change the "theme" of the website

// Blue Button

let jumbotronBtn = document.querySelector(".jumbotron");
let donateBikeBtn = document.querySelector(".buttons .btn-primary");
let volunteerBtn = document.querySelector(".buttons .btn-secondary");
let volunteerBtnText = document.querySelector(".buttons .btn-secondary");

let btnBlue = document.querySelector("#blueBtn");
btnBlue.addEventListener("click", ChangeColor);
function ChangeColor() {
  jumbotronBtn.style.background = "#588FBD";
  donateBikeBtn.style.background = "#FFA500";
  volunteerBtn.style.background = "black";
  volunteerBtnText.style.color = "white";
}
// Orange Button

let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", ChangeColor1);
function ChangeColor1() {
  jumbotronBtn.style.background = "#f0ad4e";
  donateBikeBtn.style.background = "#5751fd";
  volunteerBtn.style.background = "#31b0d5";
  volunteerBtnText.style.color = "white";
}

// Green Button
let grnBtn = document.querySelector("#greenBtn");
grnBtn.addEventListener("click", ChangeColor2);
function ChangeColor2() {
  jumbotronBtn.style.background = "#87ca8a";
  donateBikeBtn.style.background = "black";
  volunteerBtn.style.background = "#8c9c08";
}
//PART-2
// When the submit button is pressed, it should check that all the form fields are valid:
// I changed the variable names to sth that makes more sense.
// I changed line 54 and 55 to a function in order to avoid repetition

let submitBtn = document.querySelector("form .btn");
submitBtn.addEventListener("click", CheckForm);
function CheckForm(e) {
  e.preventDefault();
  let email = document.querySelector("#exampleInputEmail1");
  let name = document.querySelector("#example-text-input");
  let describe = document.querySelector("#exampleTextarea");
  let form = [email, name, describe];
  let isnotValidEmail = !email.value.length > 0 || !email.value.includes("@");
  hasValue = (input) => input.value.length > 0;
  // let isnotValidName = !name.value.length > 0;
  // let isnotValidDescription = !describe.value.length > 0;
  let isnotValid = [isnotValidEmail, !hasValue(name), !hasValue(describe)];
  for (i = 0; i < isnotValid.length; i++) {
    if (isnotValid[i]) {
      form[i].style.background = "red";
    }
  }
  if (!isnotValidEmail && hasValue(name) && hasValue(describe)) {
    alert("Thank you for filling out the form");
    document.querySelector("form").reset();
  }
}

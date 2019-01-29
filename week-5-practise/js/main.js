//  Part-1

var jumbotronDiv = document.querySelector(".jumbotron");
var buttons = document.querySelector(".buttons");
var donateBikeButton = buttons.querySelector(".btn-primary");
var volunteerButton = buttons.querySelector(".btn-secondary");
var colorButtons = document.querySelectorAll(".colorButton");

//clicking blue button events
colorButtons[0].addEventListener("click", blueBtnEvent);
function blueBtnEvent() {
  jumbotronDiv.style.backgroundColor = `#588fbd`;
  donateBikeButton.style.backgroundColor = `#ffa500`;
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
}

//clicking orange button events
colorButtons[1].addEventListener("click", orangeBtnEvent);
function orangeBtnEvent() {
  jumbotronDiv.style.backgroundColor = `#f0ad4e`;
  donateBikeButton.style.backgroundColor = `#5751fd`;
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
}

//clicking green button events
colorButtons[2].addEventListener("click", greenBtnEvent);
function greenBtnEvent() {
  jumbotronDiv.style.backgroundColor = `#87ca8a`;
  donateBikeButton.style.backgroundColor = `black`;
  volunteerButton.style.backgroundColor = "#8c9c08";
}
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
//Part-2

var inputs = document.querySelectorAll(".form-control");
var form = document.querySelectorAll("form");

document
  .querySelector("form")
  .querySelector(".btn-primary")
  .addEventListener("click", checkForm);

function checkForm(event) {
  var invalidInputCounter = 0;
  isMailAddressValid = checkMailAddressValidity(inputs[0].value);

  if (!isMailAddressValid) {
    invalidInputCounter++;
    inputs[0].style.backgroundColor = "red";
  }

  for (var i = 1; i < inputs.length; i++) {
    if (inputs[i].value.length === 0) {
      inputs[i].style.backgroundColor = "red";
      invalidInputCounter++;
    }
  }

  if (invalidInputCounter === 0) {
    alert("Thank you for filling out the form!");
    form[0].reset();
  } else {
    event.preventDefault();
  }
}

function checkMailAddressValidity(mailAddress) {
  mailAddress = mailAddress.split("");
  return mailAddress.length > 0 && mailAddress.includes("@");
}

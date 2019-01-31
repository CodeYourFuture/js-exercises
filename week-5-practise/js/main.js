//  Part-1

var jumbotronDiv = document.querySelector(".jumbotron");
var donateBikeBtn = document.querySelector(".buttons").firstElementChild;
var volunteerBtn = document.querySelector(".buttons").lastElementChild;
var colorButtons = document.querySelectorAll(".colorButton");

function addOnClickToButton(
  button,
  jumboBackGrColor,
  donateBikeBtnBackGrColor,
  volunteerBtnBackGrColor,
  volunteerBtnColor
) {
  //event listener function doing the changes when clicking the buttons
  button.onclick = function() {
    jumbotronDiv.style.backgroundColor = jumboBackGrColor;
    donateBikeBtn.style.backgroundColor = donateBikeBtnBackGrColor;
    volunteerBtn.style.backgroundColor = volunteerBtnBackGrColor;
    volunteerBtn.style.color = volunteerBtnColor;
  };
}
//calling the function for blue button events
addOnClickToButton(colorButtons[0], `#588fbd`, `#ffa500`, "black", "white");
//calling the function for blue button events
addOnClickToButton(colorButtons[1], `#f0ad4e`, `#5751fd`, "#31b0d5", "white");
//calling the function for blue button events
addOnClickToButton(colorButtons[2], `#87ca8a`, `black`, "#8c9c08", "white");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
//Part-2

//accessing the input form fields
var inputs = document.querySelectorAll(".form-control");
//accessing the form
var form = document.querySelectorAll("form");
//accessing the "submit" button
document
  .querySelector("form")
  .lastElementChild.addEventListener("click", checkForm);
//constructor function with the parameters of form input field, validity check function and the warning message
function FormField(formField, isValid, errorMsg) {
  this.formField = formField;
  this.errorMsg = errorMsg;
  this.isValid = function() {
    return isValid(this.formField.value);
  };
}
//warning messages
var emailErrMsg = "Incorrect or empty email address";
var nameErrMsg = "Your name is missing!";
var describeErrMsg = "Describe yourself area must be filled out!";
//instantination of constructor function for email input
const emailFormField = new FormField(
  inputs[0],
  isMailAddressValid,
  emailErrMsg
);
//instantination of constructor function for "you name" and "describe yourself" inputs
const name = new FormField(inputs[1], isTextValid, nameErrMsg);
const describeYourSelf = new FormField(inputs[2], isTextValid, describeErrMsg);
//checking the form validity
var formFields = [emailFormField, name, describeYourSelf];
function checkForm(event) {
  event.preventDefault();
  var errorMsgs = [];
  formFields.forEach(field => {
    if (!field.isValid()) {
      field.formField.style.backgroundColor = "red";
      errorMsgs.push(field.errorMsg);
    } else {
      field.formField.style.backgroundColor = "white";
    }
  });

  var checkResult = formFields.every(field => {
    return field.isValid();
  });

  if (checkResult) {
    alert("Thanks for filling out the form");
    form[0].reset();
  } else {
    var msg = errorMsgs.join("\n");
    alert(msg);
  }
}

function isMailAddressValid(mailAddress) {
  mailAddress = mailAddress.split("");
  return mailAddress.length > 0 && mailAddress.includes("@");
}

function isTextValid(value) {
  return value.length > 0;
}

//  Part-1

var jumbotronDiv = document.querySelector(".jumbotron");
var donateBikeBtn = document.querySelector(".buttons").firstElementChild;
var volunteerBtn = document.querySelector(".buttons").lastElementChild;
var colorButtons = document.querySelectorAll(".colorButton");

//function handling the events when click buttons
function colorButtonEvent(
  jumboBackGrColor,
  donateBikeBtnBackGrColor,
  volunteerBtnBackGrColor,
  volunteerBtnColor
) {
  jumbotronDiv.style.backgroundColor = jumboBackGrColor;
  donateBikeBtn.style.backgroundColor = donateBikeBtnBackGrColor;
  volunteerBtn.style.backgroundColor = volunteerBtnBackGrColor;
  volunteerBtn.style.color = volunteerBtnColor;
}

//object creator `factory function` defining the changes for each color event
function ButtonCreator(
  button,
  jumboBackGrColor,
  donateBikeBtnBackGrColor,
  volunteerBtnBackGrColor,
  volunteerBtnColor
) {
  this.button = button;
  this.jumboBackGrColor = jumboBackGrColor;
  this.donateBikeBtnBackGrColor = donateBikeBtnBackGrColor;
  this.volunteerBtnBackGrColor = volunteerBtnBackGrColor;
  this.volunteerBtnColor = volunteerBtnColor;
  this.colorEventStarter = function() {
    return colorButtonEvent(
      jumboBackGrColor,
      donateBikeBtnBackGrColor,
      volunteerBtnBackGrColor,
      volunteerBtnColor
    );
  };
}
//instantiation of factory function
var blueBtn = new ButtonCreator(
  colorButtons[0],
  `#588fbd`,
  `#ffa500`,
  "black",
  "white"
);
var orangeBtn = new ButtonCreator(
  colorButtons[1],
  `#f0ad4e`,
  `#5751fd`,
  "#31b0d5",
  "white"
);
var greenBtn = new ButtonCreator(
  colorButtons[2],
  `#87ca8a`,
  `black`,
  "#8c9c08",
  "white"
);

colorEvents = [blueBtn, orangeBtn, greenBtn];

//button click events
function bond007() {
  colorEvents.forEach(
    colorEvt => (colorEvt.button.onclick = colorEvt.colorEventStarter)
  );
}
bond007();

/*
//clicking blue button events
colorButtons[0].onclick = function colorEventStarter() {
  return colorButtonEvent(`#588fbd`, `#ffa500`, "black", "white");
};

//clicking orange button events
colorButtons[1].onclick = function orangeEventStarter() {
  return colorButtonEvent(`#f0ad4e`, `#5751fd`, "#31b0d5", "white");
};

//clicking green button events
colorButtons[2].onclick = function greenEventStarter() {
  return colorButtonEvent(`#87ca8a`, `black`, "#8c9c08", "white");
};
*/
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
    inputs[0].style.backgroundColor = "red";
    invalidInputCounter++;
    inputs[0].onmouseout = function() {
      alert("All areas must be filled out!");
    };
  }

  for (var i = 1; i < inputs.length; i++) {
    if (inputs[i].value.length === 0) {
      inputs[i].style.backgroundColor = "red";
      invalidInputCounter++;
      inputs[i].onmouseout = function() {
        alert("All areas must be filled out!");
      };
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

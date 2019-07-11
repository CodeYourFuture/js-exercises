var blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", addClick);

var orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", addClick);

var greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", addClick);

function buttonClick(
  jumbotronColor,
  donateABikeColor,
  volunteerBackColor,
  volunteerTextColor
) {
  document.getElementById("jumbo").style.backgroundColor = jumbotronColor;
  document.getElementById("donateBtn").style.backgroundColor = donateABikeColor;
  document.getElementById(
    "volunteerBtn"
  ).style.backgroundColor = volunteerBackColor;
  document.getElementById("volunteerBtn").style.color = volunteerTextColor;
}

function addClick() {
  if (this == document.getElementById("blueBtn")) {
    return buttonClick(`#588fbd`, `#ffa500`, "black", "white");
  } else if (this == document.getElementById("orangeBtn")) {
    return buttonClick(`#f0ad4e`, `#5751fd`, `#31b0d5`, "white");
  } else {
    return buttonClick(`#87ca8a`, `black`, `#8c9c08`, "");
  }
}

///////////////////////////////////////////////////////

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", btnHandler);

function btnHandler() {
  event.preventDefault();

  var nameField = document.getElementById("example-text-input");
  var emailField = document.getElementById("exampleInputEmail1");
  var descField = document.getElementById("exampleTextarea");

  if (
    nameField.value.length > 0 &&
    emailField.value.length > 0 &&
    emailField.value.includes("@") &&
    descField.value.length > 0
  ) {
    nameField.value = "";
    emailField.value = "";
    descField.value = "";

    alert("Thanks for submitting!");
  } else {
    if (nameField.value.length == 0) {
      nameField.style.backgroundColor = "red";
    }
    if (emailField.value.length == 0 || !emailField.value.includes("@")) {
      emailField.style.backgroundColor = "red";
    }
    if (descField.value.length == 0) {
      descField.style.backgroundColor = "red";
    }
  }
}

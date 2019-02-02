//Query Select Buttons

var blueButton = document.querySelector("#blueBtn");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

//Query Select elements

var jumboTron = document.querySelector(".jumbotron");
var donateBike = document.querySelector("#donateBikeBtn");
var volunteer = document.querySelector(".btn-secondary");

//Event Listener Functions

blueButton.addEventListener("click", function() {
  jumboTron.style.background = "#588fbd";
  donateBike.style.background = "#ffa500";
  volunteer.style.background = "black";
  volunteer.style.color = "white";
});

orangeButton.addEventListener("click", function() {
  jumboTron.style.background = "#f0ad4e";
  donateBike.style.background = "#5751fd";
  volunteer.style.background = "#31b0d5";
  volunteer.style.color = "white";
});

greenButton.addEventListener("click", function() {
  jumboTron.style.background = "#87ca8a";
  donateBike.style.background = "black";
  volunteer.style.background = "#8c9c08";
});

//Exercise 2


//Query Select Form elements
var emailInput = document.querySelector("#exampleInputEmail1");
var nameInput = document.querySelector("#example-text-input");
var describeInput = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector("#submitButton");

//Verification call-back functions
function emailValid() {
  return emailInput.value.includes("@") && emailInput.value.length > 0;
}

function nameValid() {
  return nameInput.value.length > 0;
}

function describeValid() {
  return describeInput.value.length > 0;
}

/*
//Button Event Listener
submitBtn.addEventListener(
  "click",
  function(event) {
    event.preventDefault();
    if (!emailValid()) {
      emailInput.style.border = "1px solid red";
      //emailInput.style.backgroundColor = "red";
    }
    if (!nameValid()) {
      nameInput.style.border = "1px solid red";
      //nameInput.style.backgroundColor = "red"
    }
    if (!describeValid()) {
      describeInput.style.border = "1px solid red";
      //describeInput.style.backgroundColor = "red";
    }
    if (emailValid() && nameValid() && describeValid()) {
      alert("Thank you for filling out the form (:");
      setFormDefaults();
    }
  },
  false
);
*/
var formEl = document.getElementById('form')
//Form Event Listener
formEl.addEventListener(
  "submit",
  function(event) {
    event.preventDefault();
    if (!emailValid()) {
      emailInput.style.border = "1px solid red";
      //emailInput.style.backgroundColor = "red";
    }
    if (!nameValid()) {
      nameInput.style.border = "1px solid red";
      //nameInput.style.backgroundColor = "red"
    }
    if (!describeValid()) {
      describeInput.style.border = "1px solid red";
      //describeInput.style.backgroundColor = "red";
    }
    if (emailValid() && nameValid() && describeValid()) {
      alert("Thank you for filling out the form (:");
      setFormDefaults();
    }
  },
  false
);

//Reset form to default
function setFormDefaults() {
  emailInput.value = "";
  nameInput.value = "";
  describeInput.value = "";
}

/*
addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitBtn.click();
    }
});

*/

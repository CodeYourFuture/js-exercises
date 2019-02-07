var blueButton = document.querySelector("#blueBtn");
var jumbrotron = document.querySelector(".jumbotron");
var donateBikeAndVolunteer = document.querySelectorAll(".btn-lrg");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

function changeColor(jumbotronColour, donateBike1, donateBike2) {
  jumbrotron.style.backgroundColor = jumbotronColour;
  donateBikeAndVolunteer[0].style.backgroundColor = donateBike1;
  donateBikeAndVolunteer[1].style.backgroundColor = donateBike2;
  donateBikeAndVolunteer[1].style.color = "white";
}
/*
function onBlueButtonClick() {
  jumbrotron.style.backgroundColor = "#588fbd";
  donateBikeAndVolunteer[0].style.backgroundColor = "#ffa500";
  donateBikeAndVolunteer[1].style.backgroundColor = "black";
  donateBikeAndVolunteer[1].style.color = "white";
}

blueButton.addEventListener("click", onBlueButtonClick);
-*/
function changeBlueColor() {
  changeColor("#588fbd", "#ffa500", "black");
}
blueButton.addEventListener("click", changeBlueColor);

function changeOrangeColor() {
  changeColor("#f0ad4e", "#5751fd", "b#31b0d5");
}
orangeButton.addEventListener("click", changeOrangeColor);

function changeGreenColor() {
  changeColor("#87ca8a", "black", "#8c9c08");
}
greenButton.addEventListener("click", changeGreenColor);

/*function onOrangeButtonClick() {
  jumbrotron.style.backgroundColor = "#f0ad4e";
  donateBikeAndVolunteer[0].style.backgroundColor = "#5751fd";
  donateBikeAndVolunteer[1].style.backgroundColor = "#31b0d5";
  donateBikeAndVolunteer[1].style.color = "white";
}
orangeButton.addEventListener("click", onOrangeButtonClick);

function onGreenButtonClick() {
  jumbrotron.style.backgroundColor = "#87ca8a";
  donateBikeAndVolunteer[0].style.backgroundColor = "black";
  donateBikeAndVolunteer[1].style.backgroundColor = "#8c9c08";
  donateBikeAndVolunteer[1].style.color = "white";
}
greenButton.addEventListener("click", onGreenButtonClick);
*/
var emailInput = document.getElementById("exampleInputEmail1");
var nameInput = document.getElementById("example-text-input");
var descriptionInput = document.getElementById("exampleTextarea");
var submitClick = document.getElementById("finalSubmit");

var checkEmail = function() {
  if (emailInput.value == "" || !emailInput.value.includes("@")) {
    emailInput.style.backgroundColor = "red";
    return false;
  } else {
    emailInput.style.backgroundColor = "white";
    return true;
  }
};
var checkName = function() {
  if (nameInput.value == "") {
    nameInput.style.backgroundColor = "red";
    return false;
  } else {
    nameInput.style.backgroundColor = "white";
    return true;
  }
};
var checkDescription = function() {
  if (descriptionInput.value.trim() == "") {
    descriptionInput.style.backgroundColor = "red";
    return false;
  } else {
    descriptionInput.style.backgroundColor = "white";
    return true;
  }
};
submitClick.addEventListener("click", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  if (checkEmail() && checkName() && checkDescription()) {
    alert("Thank you for filling the form correctly");
    emailInput.value = "";
    nameInput.value = "";
    descriptionInput.value = "";
  } else {
  }
}

var blueButton = document.querySelector("#blueBtn");
function jumbotronBackground() {
  var jumbotronBackgroundColor = document.querySelector(".jumbotron");
  jumbotronBackgroundColor.style.backgroundColor = "#588fbd";
}
function donateTodayBikeBtn() {
  var donateBikeButton = document.querySelector(".donateTodayBtn");
  donateBikeButton.style.backgroundColor = "#ffa500";
}
function volunteerBtnFontAndColor() {
  var volunteerButton = document.querySelector(".volunteerBtn");
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
}

blueButton.addEventListener("click", function() {
  jumbotronBackground();
  donateTodayBikeBtn();
  volunteerBtnFontAndColor();
});

var orangeButton = document.querySelector("#orangeBtn");
function orangeJumbotronBackground() {
  var jumbotronBackgroundColor = document.querySelector(".jumbotron");
  jumbotronBackgroundColor.style.backgroundColor = "#588fbd";
}
function orangeDonateTodayBikeBtn() {
  var donateBikeButton = document.querySelector(".donateTodayBtn");
  donateBikeButton.style.backgroundColor = "#ffa500";
}
function orangeVolunteerBtnFontAndColor() {
  var volunteerButton = document.querySelector(".volunteerBtn");
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "white";
}

orangeButton.addEventListener("click", function() {
  orangeJumbotronBackground();
  orangeDonateTodayBikeBtn();
  orangeVolunteerBtnFontAndColor();
});

var greenButton = document.querySelector("#greenBtn");
function greenJumbotronBackground() {
  var jumbotronBackgroundColor = document.querySelector(".jumbotron");
  jumbotronBackgroundColor.style.backgroundColor = "#87ca8a";
}
function greenDonateTodayBikeBtn() {
  var donateBikeButton = document.querySelector(".donateTodayBtn");
  donateBikeButton.style.backgroundColor = "black";
}
function greenVolunteerBtnFontAndColor() {
  var volunteerButton = document.querySelector(".volunteerBtn");
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "#8c9c08";
}

greenButton.addEventListener("click", function() {
  greenJumbotronBackground();
  greenDonateTodayBikeBtn();
  greenVolunteerBtnFontAndColor();
});

var submitButton = document.querySelector(".submitBtn");

function emailInputCheck() {
  var emailInputBox = document.querySelector("#exampleInputEmail1");
  if (emailInputBox.value.length > 0 && emailInputBox.value.includes("@"));
} else if  {  emailInputBox.style.backgroundColor = "red "}

function nameInputCheck() {
  var nameInputBox = document.querySelector("#example-text-input");
  nameInputBox.value.length > 0;
}
function describeYourselfInputCheck() {
  var describeYourselfbox = document.querySelector("exampleTextarea");
  describeYourselfbox.value.length > 0;
}

submitButton.addEventListener("click", function() {
  emailInputCheck();
  nameInputCheck();
  describeYourselfInputCheck();
});

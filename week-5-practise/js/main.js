var section = document.querySelector(".jumbotron");
var donateBtn = document.querySelector(".buttons .btn-primary");
var volunteerBtn = document.querySelector(".buttons .btn-secondary");

var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", function() {
  section.style.backgroundColor = "#588fbd";
  donateBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", function() {
  section.style.backgroundColor = "#f0ad4e";
  donateBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

var greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", function() {
  section.style.backgroundColor = "#87ca8a";
  donateBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

var submitBtn = document.querySelector("");
submitBtn.addEventListener("click", function() {
  var yourName = document.querySelector(".form-group #example-text-input");
  var emailInput = document.querySelector(".form-group #exampleInputEmail1d");
  var describeYourself = document.querySelector(".form-group #exampleTextarea");

  var formThings = { yourName, emailInput, describeYourself };
  if (
    yourName.value != "" &&
    emailInput.value != "" &&
    describeYourself.value != "" &&
    emailInput.value.includes("@")
  ) {
    //form is valid - alert and clear forms
    for (var i = 0; i < formThings.length; i++) {
      formThings[i].value = "";
      event.preventDefault();
    }
    alert("Thank you for filling out the form!");
  } else {
    //go through invalid forms and mark them red
    for (var i = 0; i < formThings.length; i++) {
      if ((formThings[i].value = "")) {
        return (formThings[i].style.backgroundColor = "red");
      }
    }
  }
});

// have not yet determined where to put    event.preventDefault();

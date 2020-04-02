let btnBlue = document.getElementById("blueBtn");
btnBlue.addEventListener("click", function() {
  let jumbotron = document.getElementsByClassName("jumbotron");
  jumbotron[0].style.backgroundColor = "588fbd";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[0].style.backgroundColor = "ffa500";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[1]
    .setAttribute("style", "background-color: black; color: white;");
});

let btnOrange = document.getElementById("orangeBtn");
btnOrange.addEventListener("click", function() {
  let jumbotron = document.getElementsByClassName("jumbotron");
  jumbotron[0].style.backgroundColor = "f0ad4e";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[0].style.backgroundColor = "5751fd";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[1]
    .setAttribute("style", "background-color: #31b0d5; color: white;");
});
let btnGreen = document.getElementById("greenBtn");
btnGreen.addEventListener("click", function() {
  let jumbotron = document.getElementsByClassName("jumbotron");
  jumbotron[0].style.backgroundColor = "87ca8a";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[0].style.backgroundColor = "black";
  document
    .querySelector(".buttons")
    .getElementsByTagName("a")[1]
    .setAttribute("style", "background-color: #8c9c08; color: white;");
});

// Part 2

let submit = document.querySelector("form");
let submitButton = submit.querySelector("button");
submitButton.addEventListener("click", checkForm);
let checkAt = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let textArea = document.getElementById("exampleTextarea");

function checkEmail() {
  return checkAt.test(emailInput.value);
}

function checkForm(event) {
  event.preventDefault();
  if (emailInput.value.length == 0 || !checkEmail()) {
    return (emailInput.style.backgroundColor = "red");
  } else if (nameInput.value.length == 0) {
    return (nameInput.style.backgroundColor = "red");
  } else if (textArea.value.length == 0) {
    return (textArea.style.backgroundColor = "red");
  } else {
    alert("Thank you for filling out the form");
    return submit.requestSubmit();
  }
}

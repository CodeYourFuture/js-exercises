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

let submit = document.querySelector("form");
let submitButton = submit.querySelector("button");
submitButton.addEventListener("click", checkForm);
let checkAt = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

function checkEmail() {
  let emailInput = document.getElementById("exampleInputEmail1").value;
  return checkAt.test(emailInput);
}

function checkForm(event) {
  let emailInput = document.getElementById("exampleInputEmail1").value;
  let nameInput = document.getElementById("example-text-input").value;
  let textArea = document.getElementById("exampleTextarea").value;
  event.preventDefault();
  if (emailInput.length == 0 || !checkEmail() === true) {
    return document
      .getElementById("exampleInputEmail1")
      .setAttribute("style", "background-color: red; color: white");
  } else if (nameInput === "") {
    return document
      .getElementById("example-text-input")
      .setAttribute("style", "background-color: red; color: white");
  } else if (textArea === "") {
    return document
      .getElementById("exampleTextarea")
      .setAttribute("style", "background-color: red; color: white");
  } else {
    alert("Thank you for filling out the form");
    return submit.requestSubmit();
  }
}

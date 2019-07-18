document.getElementById("blueBtn").addEventListener("click", blueEvent);
document.getElementById("orangeBtn").addEventListener("click", orangeEvent);
document.getElementById("greenBtn").addEventListener("click", greenEvent);

function blueEvent() {
  document.querySelector(".jumbotron").style.backgroundColor = `#588fbd`;
  document.querySelector(
    ".btn.btn-primary.btn-lrg"
  ).style.backgroundColor = `#ffa500`;
  document.querySelector(
    ".btn.btn-secondary.btn-lrg"
  ).style.backgroundColor = `black`;
  document.querySelector(".btn.btn-secondary.btn-lrg").style.color = `white`;
}
function orangeEvent() {
  document.querySelector(".jumbotron").style.backgroundColor = `#f0ad4e`;
  document.querySelector(
    ".btn.btn-primary.btn-lrg"
  ).style.backgroundColor = `#5751fd`;
  document.querySelector(
    ".btn.btn-secondary.btn-lrg"
  ).style.backgroundColor = `#31b0d5`;
  document.querySelector(".btn.btn-secondary.btn-lrg").style.color = `white`;
}
function greenEvent() {
  document.querySelector(".jumbotron").style.backgroundColor = `#87ca8a`;
  document.querySelector(
    ".btn.btn-primary.btn-lrg"
  ).style.backgroundColor = `black`;
  document.querySelector(
    ".btn.btn-secondary.btn-lrg"
  ).style.backgroundColor = `#8c9c08`;
}

//***************************check valid form****************************
document
  .querySelector("form button")
  .addEventListener("click", checkInput, false);

document
  .getElementById("exampleInputEmail1")
  .addEventListener("focus", function() {
    document.getElementById("exampleInputEmail1").style.backgroundColor =
      "white";
  });
document
  .getElementById("example-text-input")
  .addEventListener("focus", function() {
    document.getElementById("example-text-input").style.backgroundColor =
      "white";
  });
document
  .getElementById("exampleTextarea")
  .addEventListener("focus", function() {
    document.getElementById("exampleTextarea").style.backgroundColor = "white";
  });
var flag = true;
function checkInput() {
  flag = true;
  var email = document.getElementById("exampleInputEmail1");
  var textName = document.getElementById("example-text-input");
  var text = document.getElementById("exampleTextarea");

  if (email.value.length > 0 && email.value.includes("@")) {
  } else {
    email.style.backgroundColor = "red";
    // alert("Campo email sbagliato!!");
    event.preventDefault();
    flag = false;
  }

  if (!(textName.value.length > 0)) {
    textName.style.backgroundColor = "red";
    // alert("Campo nome vuoto!!");
    event.preventDefault();
    flag = false;
  }

  if (!(text.value.length > 0)) {
    text.style.backgroundColor = "red";
    // alert("Campo descriviti vuoto!!");
    flag = false;
    event.preventDefault();
  }
  if (flag) {
    alert("tutto ok");
    email.value = "";
    textName.value = "";
    text.value = "";
  }
}

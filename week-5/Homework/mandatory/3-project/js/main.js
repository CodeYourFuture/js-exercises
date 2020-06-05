let blueChanges = document.querySelector("#blueBtn");
blueChanges.addEventListener("click", function () {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".jumbotron .btn").style.backgroundColor = "#ffa500";
  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "black";
  document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});

let orangeChanges = document.querySelector("#orangeBtn");
orangeChanges.addEventListener("click", function () {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".jumbotron .btn").style.backgroundColor = "#5751fd";
  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#31b0d5";
  document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});

let greenChanges = document.querySelector("#greenBtn");
greenChanges.addEventListener("click", function () {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".jumbotron .btn").style.backgroundColor = "black";
  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#8c9c08";
});

//Part 2

let findButtom = document.getElementsByTagName("button")[4];
console.log(findButtom);

let email = document.getElementById("exampleInputEmail1");
let name = document.getElementById("example-text-input");
let text = document.getElementById("exampleTextarea");

findButtom.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value.length <= 0 || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
  } else {
    email.style.backgroundColor = "white";
  }
  if (name.value.length <= 0) {
    name.style.backgroundColor = "red";
  } else {
    name.style.backgroundColor = "white";
  }
  if (text.value.length <= 0) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }

  if (
    email.value.length > 0 &&
    email.value.includes("@") &&
    name.value.length > 0 &&
    text.value.length > 0
  ) {
    alert("Thank you for filling out this form");
    email.value = "";
    name.value = "";
    text.value = "";
  }
});

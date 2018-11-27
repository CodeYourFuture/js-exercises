const blueButton = document.querySelector("#blueBtn");
const orangeButton = document.querySelector("#orangeBtn");
const greenButton = document.querySelector("#greenBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".jumbotron .btn-primary");
const volunteerBtn = document.querySelector(".jumbotron .btn-secondary");
blueButton.addEventListener("click", blue);
orangeButton.addEventListener("click", orange);
greenButton.addEventListener("click", green);
function blue() {
  jumbotron.style.background = "#588fbd";
  donateBtn.style.background = "#ffa500";
  volunteerBtn.style.background = "black";
  volunteerBtn.style.color = "white";
}
function orange() {
  jumbotron.style.background = " #f0ad4e";
  donateBtn.style.background = "#5751fd";
  volunteerBtn.style.background = "#31b0d5";
  volunteerBtn.style.color = "white";
}
function green() {
  jumbotron.style.background = "#87ca8a";
  donateBtn.style.background = "black";
  volunteerBtn.style.background = " #8c9c08";
}

//task 2
const email = document.querySelector("#exampleInputEmail1");
const name = document.querySelector("#example-text-input");
const describe = document.querySelector("#exampleTextarea");
const submittion = document.querySelector("form .btn-primary");
const entrees = [email, name, describe];
// function validate() {
//   return new Promise((resolve, reject) => {
//     if (
//       email.value &&
//       name.value &&
//       describe.value &&
//       email.value.includes("@")
//     ) {
//       resolve("thank you for filling out the form");
//     } else {
//       reject("a problem");
//     }
//   });
// }
function validate() {
  return emailValidate()
    .then(nameValidate)
    .then(describeValidate);
}

function emailValidate() {
  return new Promise((resolve, reject) => {
    if (!email.value.includes("@")) {
      reject(email);
    }
    resolve("thank you for filling out the form");
  });
}

function nameValidate() {
  return new Promise((resolve, reject) => {
    if (!name.value) {
      reject(name);
    }
    resolve("thank you for filling out the form");
  });
}

function describeValidate() {
  return new Promise((resolve, reject) => {
    if (!describe.value) {
      reject(describe);
    }
    resolve("thank you for filling out the form");
  });
}

function test() {
  let myPromise = validate();
  myPromise
    .then(value => alert(value))
    .catch(err => {
      err.style.background = "red";
      event.preventDefault();
    });
}

submittion.addEventListener("click", test);

//First exercise of part1
let changeBackground = document.getElementById("blueBtn");

function changeBlueButton() {
  let getJumbo = document.querySelector(".jumbotron");
  getJumbo.style.backgroundColor = "#588fbd";
  //why can not i get the same result by querySelector
  let changeDonate = document.getElementsByClassName(
    "btn btn-primary btn-lrg"
  )[0];
  changeDonate.style.backgroundColor = "ffa500";
  let changeVolunteerBtn = document.getElementsByClassName(
    "btn btn-secondary btn-lrg"
  )[0];
  changeVolunteerBtn.style.backgroundColor = "black";
  changeVolunteerBtn.style.color = "white";
}
changeBackground.addEventListener("click", changeBlueButton);

//Second exercise of par1
let changeBackground2 = document.getElementById("orangeBtn");

function changeOrangeButton() {
  let getJumbo2 = document.querySelector(".jumbotron");
  getJumbo2.style.backgroundColor = "#f0ad4e";

  let changeDonate2 = document.getElementsByClassName(
    "btn btn-primary btn-lrg"
  )[0];
  changeDonate2.style.backgroundColor = "#5751fd";

  let changeVolunteerBtn2 = document.getElementsByClassName(
    "btn btn-secondary btn-lrg"
  )[0];
  changeVolunteerBtn2.style.backgroundColor = "#31b0d5";
  changeVolunteerBtn2.style.color = "white";
}
changeBackground2.addEventListener("click", changeOrangeButton);

//third exercise of part1
let changeBackground3 = document.getElementById("greenBtn");
function changeGreenButton() {
  let getJumbo3 = document.querySelector(".jumbotron");
  getJumbo3.style.backgroundColor = "#87ca8a";

  let changeDonate3 = document.getElementsByClassName(
    "btn btn-primary btn-lrg"
  )[0];
  changeDonate3.style.backgroundColor = "black";

  let changeVolunteerBtn3 = document.getElementsByClassName(
    "btn btn-secondary btn-lrg"
  )[0];
  changeVolunteerBtn3.style.backgroundColor = "#8c9c08";
}
changeBackground3.addEventListener("click", changeGreenButton);

//Part2
let getSubmitBtn = document.getElementsByTagName("button")[4];
console.log(getSubmitBtn);
//emil
let getEmail = document.getElementById("exampleInputEmail1");

console.log(getEmail);
//Your name
let getYourName = document.getElementById("example-text-input");
console.log(getYourName);
// textField
let getDescribeYourSelf = document.getElementById("exampleTextarea");
console.log(getDescribeYourSelf);

function clickSubmitBtn(e) {
  e.preventDefault();
  if (getEmail.value.length <= 0 || !getEmail.value.includes("@")) {
    getEmail.style.backgroundColor = "red";
  } else {
    getEmail.style.backgroundColor = "white";
  }
  if (getYourName.value.length <= 0) {
    getYourName.style.backgroundColor = "red";
  } else {
    getYourName.style.backgroundColor = "white";
  }
  if (getDescribeYourSelf.value.length <= 0) {
    getDescribeYourSelf.style.backgroundColor = "red";
  } else {
    getDescribeYourSelf.style.backgroundColor = "white";
  }
  if (
    getEmail.value.length > 0 &&
    getEmail.value.includes("@") &&
    getYourName.value.length > 0 &&
    getDescribeYourSelf.value.length > 0
  ) {
    alert("Thank you for filling out the form");
    getEmail.value = " ";
    getYourName.value = "";
    getDescribeYourSelf.value = "";
  }
}

getSubmitBtn.addEventListener("click", clickSubmitBtn);

// Part One I declared a functions to get buttons and colors as a parameter and change the colors
let changeColorEl = function (
  btn,
  divBColor,
  donateBtnOneBColor,
  donateBtnTwoBColor,
  donateBtnTwoColor
) {
  btn.addEventListener("click", function () {
    let divEl = document.querySelector(".jumbotron");
    divEl.style.backgroundColor = divBColor;
    let donatBtnEl = document.querySelectorAll(".buttons a");
    donatBtnEl[0].style.backgroundColor = donateBtnOneBColor;
    donatBtnEl[1].style.backgroundColor = donateBtnTwoBColor;
    donatBtnEl[1].style.color = donateBtnTwoColor;
  });
};
// Declare buttons and access to buttons in page
let blueBtn = document.getElementById("blueBtn");
let orangBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
// Call function with different value for parameters
changeColorEl(blueBtn, "#588fbd", "#ffa500", "black", "white");
changeColorEl(orangBtn, "#f0ad4e", "#5751fd", "#31b0d5", "white");
changeColorEl(greenBtn, "#87ca8a", "black", "#8c9c08", "black");

// Part Two validation filds in form
// Declare click event for submit button
let submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", function (event) {
  //in these lines I can access to 4 element that I need to work on them
  let formEl = document.querySelector("form");
  let emailEl = document.querySelector("#exampleInputEmail1");
  let nameEl = document.querySelector("#example-text-input");
  let descriptionEl = document.querySelector("#exampleTextarea");
  // I declare 2 varable that has 2 state if it is true its meen has a problem
  let empityValidation = false;
  let inputValadation = false;
  // Check the value of element if is empity or is not valid 
  if (emailEl.value == "") {
    empityValidation = true;
    emailEl.style.backgroundColor = "white";
  } 
  else {
    if (!/^.+@.+\..+$/.test(emailEl.value)) {
      emailEl.style.backgroundColor = "#e84118";
      inputValadation = true;
      event.preventDefault();
    }
  }
  nameEl.value == "" ? (empityValidation = true) : {};
  descriptionEl.value == "" ? (empityValidation = true) : {};
  if (empityValidation == true) {
    alert("Please filling out the form!!!");
    event.preventDefault();
  }
  if(!inputValadation && !empityValidation)
  {
    emailEl.style.backgroundColor = "white";
    emailEl.value = "";
    nameEl.value = "";
    descriptionEl.value = "";
  }
});

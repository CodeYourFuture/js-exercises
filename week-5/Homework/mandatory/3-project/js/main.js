//----------------PART-ONE-----------------------------:

let blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", blueMaker);
function blueMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".buttons > a").style.backgroundColor = "#ffa500";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "black";
  volBtn.style.color = "white";
}

let orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", orangeMaker);

function orangeMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".buttons > a").style.backgroundColor = "#5751fd";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "#31b0d5";
  volBtn.style.color = "white";
}

let greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", greenMaker);

function greenMaker() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".buttons > a").style.backgroundColor = "black";
  volBtn = document.querySelector(".buttons a:last-child");
  volBtn.style.backgroundColor = "#8c9c08";
}

//-----------------PART-TWO----------------------------------

/*Just below the buttons, there's a form called **Register with us today**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:

- The **Email address**, **Your name** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email Address** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
If all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the for.
- Blank out (make empty) all the text fields*/

let submitButton = document.querySelector("form > button");
submitButton.addEventListener("click", function () {
  let labels = document.querySelectorAll("form label");
});

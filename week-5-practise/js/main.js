/*### part 1

whhen clicking **blue** it should change:
        - **Jumbotron** background color to `#588fbd`
        - **Donate a bike** button background color to `#ffa500`
        - **Volunteer** button background color to `black` and text color to `white`*/

var blueTheme = document.querySelector("#blueBtn");
var myContainer = document.querySelector(".jumbotron");
var myButton = document.querySelectorAll(".btn-lrg");
var volunteer = myButton[1];
var donateBike = myButton[0];
blueTheme.addEventListener("click", blueBackground);
function blueBackground() {
  myContainer.style.backgroundColor = "#588fbd";
  donateBike.style.backgroundColor = "#ffa500";
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
}

/*When clicking **orange** it should change:
        - **Jumbotron** background color to `#f0ad4e`
        - **Donate a bike** button background color to `#5751fd`
        - **Volunteer** button background color to `#31b0d5` and text color to `white`*/

var orangeTheme = document.querySelector("#orangeBtn");
var myContainer = document.querySelector(".jumbotron");
var myButton = document.querySelectorAll(".btn-lrg");
var volunteer = myButton[1];
var donateBike = myButton[0];
orangeTheme.addEventListener("click", orangeBackground);
function orangeBackground() {
  myContainer.style.backgroundColor = "#f0ad4e";
  donateBike.style.backgroundColor = "#5751fd";
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
}
/*When clicking **green** it should change:
       - **Jumbotron** background color to `#87ca8a`
       - **Donate a bike** button background color to `black`
       - **Volunteer** button background color to `#8c9c08`*/

var greenTheme = document.querySelector("#greenBtn");
var myContainer = document.querySelector(".jumbotron");
var myButton = document.querySelectorAll(".btn-lrg");
var volunteer = myButton[1];
var donateBike = myButton[0];
greenTheme.addEventListener("click", greenBackground);
function greenBackground() {
  myContainer.style.backgroundColor = "#87ca8a";
  donateBike.style.backgroundColor = "black";
  volunteer.style.backgroundColor = "#8c9c08`";
  volunteer.style.color = "white";
}
/*
### Part 2

Just below the buttons, there's a form called **Register with us**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:
- The ** Your name **, ** Email ** and ** Describe yourself ** fields need to be non - empty(Hint: their`value` length has to be greater than zero)
    - For the ** Email ** field also check if it contains the`@` character

For all the fields that invalid, it should make their background color`red`.
IF all the fields are valid, when you click ** Submit ** it should:
- Display an alert to thank you for filling out the form
    - Blank out(make empty) all the text fields

        ** Important hint:** In your function that handles clicks on the`Submit` button you will need to call`event.preventDefault()` to stop the browser from refreshing the page.To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault 
*/
var submitBtn = document.querySelector("#submitBtn");
var controlForm = document.querySelectorAll(".form-control");
var email = document.querySelector("#exampleInputEmail1");
var name2 = document.querySelector("#name-input");
var describe = document.querySelector("#exampleTextarea");
submitBtn.addEventListener("click", confirmFilled);
function confirmFilled() {
  event.preventDefault();
  if (email.value == "" || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
  }
  if (name2.value == "") {
    name2.style.backgroundColor = "red";
  }
  if (describe.value == "") {
    describe.style.backgroundColor = "red";
  }
  if (
    email.value.length > 0 &&
    name2.value.length > 0 &&
    describe.value.length > 0 &&
    email.value.includes("@")
  ) {
    alert("Thank you for filling out this form");
    //form.reset();
    name2.value = "";
    email.value = "";
    describe.value = "";
  }
}
//confirmFilled();

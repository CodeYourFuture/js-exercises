/*When clicking **blue** it should change:
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

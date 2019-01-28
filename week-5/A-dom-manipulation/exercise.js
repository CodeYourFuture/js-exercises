/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector("#bgrChangeBtn");
var body = document.querySelector("body");
myButton.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = "pink";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", showAlertMessage);

function showAlertMessage() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addText);

function addText() {
  var paragraph = document.querySelector("#showText");
  paragraph.innerText = "Read more below";
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinks = document.querySelector("#largerLinksBtn");

largerLinks.addEventListener("click", increaseLinks);
function increaseLinks() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "30px";
  }
}

/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = "blue";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var myButton = document.querySelector("#addTextBtn");
myButton.addEventListener("click", newParagraph);
var buttons = document.querySelector(".buttons");

function newParagraph() {
  var paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
  buttons.appendChild(paragraph);
  paragraph.innerText = "Read more below.";
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var myButton = document.querySelector("#largerLinksBtn");
myButton.addEventListener("click", textIncrease);
var links = document.querySelectorAll("a");
function textIncrease() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "xx-large";
  }
}

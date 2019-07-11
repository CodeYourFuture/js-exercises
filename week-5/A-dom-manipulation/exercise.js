/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", changeColor);

function changeColor() {
  this.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myAlertButton = document.getElementById("alertBtn");
myAlertButton.addEventListener("click", alertFunc);

function alertFunc() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var myAddButton = document.getElementById("addTextBtn");
myAddButton.addEventListener("click", addText);

function addText() {
  var paragraph = document.createElement("p");
  this.parentElement.appendChild(paragraph);
  paragraph.innerText = "Read more below.";
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerButton = document.getElementById("largerLinksBtn");
largerButton.addEventListener("click", increaseText);

function increaseText() {
  var paragraphs = document.querySelectorAll("a");
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = 22;
  }
}

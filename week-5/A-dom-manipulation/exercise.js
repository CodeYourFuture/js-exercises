/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myElement = document.querySelector("#bgrChangeBtn");
myElement.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = "orange";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myElement = document.querySelector("#alertBtn");
myElement.addEventListener("click", giveAlert);
function giveAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var myElement = document.querySelectorAll(".jumbotron");
var addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addSomeText);
var paragraph = document.createElement("p");
paragraph.innerText = "Read more below.";

function addSomeText() {
  myElement[0].appendChild(paragraph);
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largeTxt = document.querySelector("#largerLinksBtn");
largeTxt.addEventListener("click", largerFont);
function largerFont() {
  let links = document.querySelectorAll("a");
  links.forEach(link => (link.style.fontSize = "1.5em"));
}

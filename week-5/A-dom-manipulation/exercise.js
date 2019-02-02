/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
//console.log("Hello Sola!!");

var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = "yellow";
  // alert("Something");
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
var textButton = document.querySelector("#addTextBtn");
var paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
paragraph.innerText = "Read more below. ";
function onclickAddText() {
  var chooseArea = document.querySelector(".jumbotron");
  chooseArea.appendChild(paragraph);
}
textButton.addEventListener("click", onclickAddText);
// now the element is added to our view, but it's empty
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var linksButton = document.querySelector("#largerLinksBtn");
var myLinks = document.querySelectorAll("a");

function enlargeText() {
  for (var i = 0; i < myLinks.length; i++) {
    myLinks[i].style.fontSize = "xx-large";
  }
}
linksButton.addEventListener("click", enlargeText);

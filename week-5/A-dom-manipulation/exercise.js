/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var pageBody = document.querySelector("body");
var changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  return (pageBody.style.backgroundColor = "blue");
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertMessage);

function alertMessage() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addTxtBtn = document.querySelector("#addTextBtn");

addTxtBtn.addEventListener("click", function() {
  var paragraph = document.createElement("p");
  paragraph.innerText = "Read More Below";
  var buttonsBox = document.querySelector(".buttons");
  return buttonsBox.appendChild(paragraph);
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinks = document.querySelector("#largerLinksBtn");

largerLinks.addEventListener("click", function() {
  var allLinks = document.querySelectorAll("a");
  allLinks.forEach(element => {
    element.style.fontSize = "x-large";
  });
});

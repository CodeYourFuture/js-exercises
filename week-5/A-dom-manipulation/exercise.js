/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeColorButt = document.querySelector("#bgrChangeBtn"); //found the Id in the HTML
changeColorButt.addEventListener("click", changeColor);
var bodyBackGroundColor = document.querySelector("body");
function changeColor() {
  bodyBackGroundColor.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertButt = document.querySelector("#alertBtn");
alertButt.addEventListener("click", myAlert);
function myAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", addingText);
function addingText() {
  var element = document.querySelectorAll(".jumbotron");
  var p = document.createElement("p");
  p.innerHTML = "Read more below.";
  element[0].appendChild(p);
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largLinks = document.querySelector("#largerLinksBtn");
largLinks.addEventListener("click", larger);
function larger() {
  let links = document.querySelectorAll("a");
  links.forEach(link => (link.style.fontSize = "2em"));
}

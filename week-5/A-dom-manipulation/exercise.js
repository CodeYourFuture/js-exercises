/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeButton = document.querySelector("#bgrChangeBtn");
changeButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  document.body.style.backgroundColor = "green";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertText);

function alertText() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var textButton = document.querySelector("#addTextBtn");
var paragraph = document.createElement("p");
paragraph.innerText = "Read more below.";
paragraph.style.fontSize = "1.5em";
var addTextArea = document.querySelector(".jumbotron");
textButton.addEventListener("click", addText);
function addText() {
  addTextArea.appendChild(paragraph);
}

/*
Task 4


When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largeButton = document.querySelector("#largerLinksBtn");
largeButton.addEventListener("click", increaseFontSize);
var buttons = document.querySelectorAll("a");
function increaseFontSize() {
  for (var button of buttons) {
    button.style.fontSize = "1.5em";
  }
}

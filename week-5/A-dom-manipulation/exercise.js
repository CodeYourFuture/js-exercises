/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let body1 = document.querySelector("body");
  body1.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", showAlert);

function showAlert() {
  alert("Thanks for visiting Bikes for Refugees");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addText);

function addText() {
  let paragraph = document.createElement("p");
  let Element = document.querySelectorAll(".jumbotron");
  paragraph.innerHTML = "Read more below.";
  Element[0].append(paragraph);
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", increaseLinks);

function increaseLinks() {
  let allLinks = document.querySelectorAll("a");

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.fontSize = "50px";
  }
}

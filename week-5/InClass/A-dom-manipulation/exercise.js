/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pEls = document.querySelectorAll("p");
console.log(pEls);

const divEl = document.querySelector("div");
console.log(divEl);

const jumbotron = document.getElementById("jumbotron-text");
console.log(jumbotron);

const pElsInPrimary = document.querySelectorAll(".primary-content p");
console.log(pElsInPrimary);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector("#alertBtn");

alertBtn.addEventListener("click", alertVisitor);

function alertVisitor() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bgrChangeBtn = document.querySelector("#bgrChangeBtn");

bgrChangeBtn.addEventListener("click", changeBackground);

function changeBackground() {
  document.body.style.backgroundColor = "rgba(2,117,216,.5)";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const buttons = document.querySelector(".buttons");

const addTextBtn = document.querySelector("#addTextBtn");

addTextBtn.addEventListener("click", addText);

function addText() {
  const newP = document.createElement("p");
  newP.textContent = "Read more below.";
  buttons.appendChild(newP);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", makeLinksTextLarger);

function makeLinksTextLarger() {
  const allLinks = document.querySelectorAll("a");
  allLinks.forEach((a) => (a.style.fontSize = "24px"));
}

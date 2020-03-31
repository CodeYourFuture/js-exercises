/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
*/

console.log(document.querySelectorAll("p"));

/*
    2. the first div element node
    --> should log the ".site-header" node
*/
console.log(document.querySelectorAll("div")[0]);

/*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
*/

console.log(document.querySelector("#jumbotron-text"));

/*

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelector(".primary-content"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertme);

function alertme() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document.querySelector("#bgrChangeBtn").addEventListener("click", changeBg);

function changeBg() {
  let pBody = document.querySelector("body");
  pBody.style.backgroundColor = "#FFCC99";
}

/*
Task 4
======

When a user clicks the 'Add some text' button,
 a new paragraph should be added below the buttons that says "Read more below."
*/

document.querySelector("#addTextBtn").addEventListener("click", addParagraph);

let paragraph = document.createElement("p");
paragraph.innerText = "Read more below.";
paragraph.style.color = "red";
paragraph.style.fontSize = "4em";

let myParentElement = document.querySelector(".buttons");

let myParent2 = document.querySelector(".buttons");
//let my = docuement.createElement("Span")

function addParagraph() {
  // myParentElement.appendChild(paragraph);
  myParentElement.prepend(paragraph);
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let allLinks = document.querySelectorAll("a");

document
  .querySelector("#largerLinksBtn")
  .addEventListener("click", increaseFonts);

function increaseFonts() {
  //for (let i = 0; i < allLinks.length; i++) {
  //  allLinks[i].style.fontSize = "30px";
  // }

  allLinks.forEach(el => {
    el.style.fontSize = "30px";
  });
}

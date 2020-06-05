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

    4. ..all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

var x = document.getElementsByTagName("div");
var divion = x[0];
console.log(divion);

var withID = document.getElementById("jumbotron-text");
console.log(withID);

var allp = document.querySelectorAll(".primary-content p");

console.log(allp);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

*/
var Catch = document.getElementById("alertBtn");
Catch.addEventListener("click", function () {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const ChangeColor = document.getElementById("bgrChangeBtn");
ChangeColor.addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addNew = document.getElementById("addTextBtn");
addNew.addEventListener("click", function () {
  const para = document.createElement("p");
  const theText = document.createTextNode("Read more below.");
  para.appendChild(theText);

  addNew.appendChild(para);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const TheLinksB = document.getElementById("largerLinksBtn");
const AllLinks = document.querySelectorAll("a");
TheLinksB.addEventListener("click", function () {
  Array.from(AllLinks).forEach(function (a) {
    a.style.fontSize = "2em";
  });
});

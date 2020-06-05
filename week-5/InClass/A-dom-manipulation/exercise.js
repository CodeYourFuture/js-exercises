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
let getAll = document.querySelectorAll("p");
//console.log(getAll.length);
let firstDiv = document.querySelector("body");
//console.log(firstDiv.firstElementChild.nextElementSibling);
let gitId = document.querySelector("#jumbotron-text");
//console.log(gitId);
let getAllPsInside = document
  .querySelector(".primary-content")
  .querySelectorAll("p");
console.log(getAllPsInside);
// another way to solve number4
let getAllPsInsideBy = document.querySelectorAll(".primary-content p");
//console.log(getAllPsInsideBy.length);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let clicked = document.getElementById("alertBtn");
function clickable() {
  alert("Thanks for visiting Bikes for Refugees!");
}
clicked.addEventListener("click", clickable);
//console.log(clicked);

// let alertButton = document.getElementById("alertBtn");
// function clickable() {
//   alert("Thanks for visiting Bikes for Refugees!");
// }
// alertButton.addEventListener("click", clickable);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColor = document.getElementById("bgrChangeBtn");
function changeable() {
  document.body.style.backgroundColor = "green";
}
changeColor.addEventListener("click", changeable);
//console.log(changeColor);

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// let readMore = document.getElementById("addTextBtn");
// function addNewText() {
//   alert("Read more below.").insertAdjacentHTML("afterend", readMore);
// }
// readMore.addEventListener("click", addNewText);

// console.log(readMore);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let getButton = document.querySelector("#largerLinksBtn");
let getAllLinks = document.querySelectorAll("a");
function increaseSize() {
  getAllLinks.forEach((font) => (font.style.fontSize = "2em"));
  //alert("hi");
}
getButton.addEventListener("click", increaseSize);

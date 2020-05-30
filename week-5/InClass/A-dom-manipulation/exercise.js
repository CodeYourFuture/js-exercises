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

const paras = document.querySelectorAll("p");
console.log(paras);

console.log(document.querySelector("div"));

console.log(document.getElementById("jumbotron-text"));
// console.log(document.querySelector("#jumbotron-text"));

console.log(document.querySelectorAll(".primary-content p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertButton = document.getElementById("alertBtn");
alertButton.addEventListener("click", alertThanks);

function alertThanks() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeButton = document.getElementById("bgrChangeBtn");
const backGrnd = document.querySelector("body");

changeButton.addEventListener("click", changeColor);
function changeColor() {
  backGrnd.style.backgroundColor = "green";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

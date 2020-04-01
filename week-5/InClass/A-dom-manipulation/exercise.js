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
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
console.log();
let btn = document.querySelector(".buttons #alertBtn ");
btn.addEventListener("click", alertSth);
function alertSth() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", ChangeColor);
function ChangeColor() {
  document.body.style.background = "red";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextBtn = document.querySelector("#addTextBtn"); //we find button
addTextBtn.addEventListener("click", addText); //define the event click call the function addtext
function addText() {
  let paragraph = document.createElement("p"); //creating new paragraf element
  paragraph.innerText = "Read more below"; //text i should be in the  paragraf
  let jumbotron = document.querySelector(".jumbotron");

  jumbotron.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

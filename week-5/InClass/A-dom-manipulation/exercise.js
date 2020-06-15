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
let task1 = document.querySelectorAll("p");
console.log(task1);
let task2 = document.querySelector("div");
console.log(task2);
let task3 = document.querySelector("#jumbotron-text");
console.log(task3);
let task4 = document.querySelectorAll(".primary-content p");
console.log(task4);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertText = document.querySelector("#alertBtn");
alertText.addEventListener("click", showAlert);

function showAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let newColor = document.querySelector("#bgrChangeBtn");
newColor.addEventListener("click", changeColor);

function changeColor() {
  let newBackGr = document.querySelector("body");
  newBackGr.style.backgroundColor = "yellow";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/


let newPar = document.querySelector("#addTextBtn");
newPar.addEventListener("click", addPar);

function addPar() {
  let par = document.createElement("p");
  par.innerText = "Read more below.";
  let newDiv = document.querySelector(".buttons");
  newDiv.appendChild(par);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largeLink = document.querySelector("#largerLinksBtn");
largeLink.addEventListener("click", makeLarge);

function makeLarge() {
  let links = document.querySelectorAll("a");
  links.forEach((link) => (link.style.fontSize = "1.5em"));
}

/*
Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/


let ul = document.createElement("ul"); // ul also accepts display flex from parent div... how to change?
const inputDiv = document.querySelectorAll(".primary-content div")[3];
inputDiv.appendChild(ul);
let addText = document.querySelector("#addArticleBtn");
addText.addEventListener("click", addList);

function addList() {
  let li = document.createElement("li");
  li.innerText = document.querySelector("input").value;
  ul.appendChild(li);
}

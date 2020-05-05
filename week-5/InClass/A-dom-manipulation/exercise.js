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

// 1.
let pElems = document.querySelectorAll("p");
console.log(pElems);

// 2.
let firstDiv = document.querySelector("div");
console.log(firstDiv);

// 3.
let jumbotron = document.querySelector("#jumbotron-text");
console.log(jumbotron);

// 4.
let primaryContentPs = document.querySelectorAll(".primary-content p");
console.log(primaryContentPs);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let colourChange = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener("click", changeColour);

function changeColour() {
    document.body.style.backgroundColor = "skyblue";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let newText = document.createElement("p");
newText.innerText = "Read more below.";

let btn = document.querySelector("#addTextBtn");
btn.addEventListener("click", addText);

function addText() {
    let elem = document.querySelector(".jumbotron");
    elem.appendChild(newText);
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerLinks);

function largerLinks() {
    let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.fontSize = "x-large";
    }
}
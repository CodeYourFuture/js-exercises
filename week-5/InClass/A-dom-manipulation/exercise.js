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

// Task 1 - answers
let allP = document.querySelectorAll("p");
console.log(allP);

let firstDiv = document.querySelector(".site-header");
console.log(firstDiv);

let jumbotron1 = document.querySelector("#jumbotron-text");
console.log(jumbotron);

let primaryContent = document.querySelector(".primary-content");
let allPs = primaryContent.querySelectorAll("p");
console.log(allPs);

let allPs2 = document.querySelector(".primary-Content").querySelectorAll("p");
console.log(allPs2);

allPs3 = document.querySelectorAll(".primary-content p");
console.log(allPs3);

// /*
// Task 2
// ======

// When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
// */


// /*
// Task 3
// =======

// Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
// */

// let changeButton = document.querySelector("#bgrChangeBtn");
// changeButton.addEventListener("click",changeColor);
// function changeColor() {
//     document.querySelector("body").style.backgroundColor = "blue";
//     document.querySelector("body").style.fontSize = "20px";
// }

// let changeColorBtn = document.querySelector("#bgrChangeBtn");
// changeColorBtn.addEventListener("click", function () {
//     document.querySelector("body").style.backgroundColor = "yellow";
//     document.querySelector(".jumbotron").style.backgroundColor = "orange";
// }



let bodyEl = document.querySelector("body");
let newParagraph = document.createElement("hr");
bodyEl.appendChild(newParagraph); 


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let button = document.querySelector("#addTextBtn")
let jumbotron = document.querySelector(".jumbotron")  

button.addEventListener("click", function() {
    let paragraph = document.createElement("p");
    paragraph.innerText = "Read more below";
    jumbotron.appendChild(paragraph);
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let paragraphs = document.querySelector("body p");
paragraphs.forEach(element => element.style.backgroundColor = "blue");
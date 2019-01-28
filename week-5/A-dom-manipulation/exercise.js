/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myElement = document.querySelector("#bgrChangeBtn");
myElement.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var mybuttonElement = document.querySelector("#alertBtn");
mybuttonElement.addEventListener("click", alertB);
function alertB() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addTextButton = document.querySelector("#addTextBtn");
var myContainer = document.querySelectorAll(".jumbotron");
var paragraph = document.createElement("p");
paragraph.innerText = "Read more below.";
addTextButton.addEventListener("click", addTextB);

function addTextB() {
  myContainer[0].appendChild(paragraph);
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largeButtonText = document.querySelector("#largerLinksBtn");
largeButtonText.addEventListener("click", largeBTextIncrease);
function largeBTextIncrease() {
    document.querySelectorAll("a").forEach(function (largeButtonText) {
        largeButtonText.style.fontSize = "3em"
    })
}
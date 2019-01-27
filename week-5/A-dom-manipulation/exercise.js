/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var changeButton = document.querySelector("#bgrChangeBtn");
console.log (changeButton);
changeButton.addEventListener("click", changeColour);


function changeColour() {
    document.body.style.backgroundColor ="red";
}


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addSomeTextButton = document.querySelector("#addTextBtn");
addSomeTextButton.addEventListener("click", addSomeTextFunction);

var placeToAdd = document.querySelector(".jumbotron");

function addSomeTextFunction() {
    var paragraph = document.createElement("p");
    paragraph.innerText = "Read more below.";
    placeToAdd.appendChild(paragraph);
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerLinksBtnFunction);

function largerLinksBtnFunction() {
    document.querySelectorAll('a').forEach(aStyle => aStyle.style.fontSize = "2em");
}
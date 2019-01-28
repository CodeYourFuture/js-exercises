/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeBackground = document.querySelector("#bgrChangeBtn");
changeBackground.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor() {
  document.body.style.backgroundColor = "yellow";
}
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var clicksButton = document.querySelector("#donation-count-alert");
clicksButton.addEventListener("click", alert);
function alert() {
  document.body.style.alert = "Thanks for visiting Bikes for Refugees!";
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

//use inspect to find what element is called in code. find out the container name.selcet that conatner.
//create a new element to hold the paragraph. write what u want in it.
//so when button is clicked then carry out the function. which creates the contaner and adds the paragraph.

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var textIncrease = document.querySelector("#largerLinksBtn");
textIncrease.addEventListener("click", bigLinks);
function bigLinks() {
  document.querySelectorAll("a").forEach(function(textIncrease) {
    textIncrease.style.fontSize = "3em";
    console.log("mohbeen");
  });
}

//callback= func in a func.
//create a var that we wil modify
//get all the button called largerlinks.
//when this is clicked the var will execute the function.
//selecting all the links (first function) eg:a. and foreach function will make all the a bigger thats in my variable.
//console.log will test on the console what will happen.

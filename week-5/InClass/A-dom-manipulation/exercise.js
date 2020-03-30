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

//1. 
console.log(document.querySelectorAll("p"));
//2.
console.log(document.querySelector(".site-header"))
//3.
console.log(document.querySelector("#jumbotron-text"))
//4.
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
/*
example syntax === to create an alert box === 

create a variable name = then assign 
let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", alertSomething);

message by creating a 
function alertSomething() {
    alert("Something");
}
*/

let alertButton = document.querySelector("#alertBtn"); 
alertButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeClr = document.querySelector("#bgrChangeBtn");
    changeClr.addEventListener("click", changeBgr);

    function changeBgr() {
    document.body.style.backgroundColor = "palegreen";
};

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", addText)

document.querySelector("#addTextBtn").addEventListener("click", addParagraph);
let paragraph = document.createElement("p");
paragraph.innerText = "Read more below.";
paragraph.style.color = "red";
paragraph.style.fontSize = "4em";
let myParentElement = document.querySelector(".buttons");
let myParent2 = document.querySelector(".buttons");
function addParagraph() {
 myParentElement.appendChild(paragraph);
}

//====================
let addSomeTxt = document.querySelector("#addTextBtn");
addSomeTxt.addEventListener("click", function (){
    let readMore = document.querySelector(".button"); 
    let paragraphTxt = document.createElement("p");
    readMore.innerText = "This is new text will appear on click of button."
    parent.appendChild(paragraphTxt);
});

//======================
let addTxtButton = document.querySelector("#addTextBtn"); //#id button element selected
addTxtButton.addEventListener("click", addNewTextToButtonOnClick); //defined the event "click", call the function addNewTextToButtonOnClick

//create a function for new inner paragraph text that will appear on click
function addNewTextToButtonOnClick() {
    let newInnerParagraphTxt = document.createElement("p");//creates a new paragraph element
    newInnerParagraphTxt.innerText = "Read more below." //new text added on click of button
    let jumbotron = document.querySelector(".jumbotron"); // select parent for this button = .jumbotron class is the parent 
    jumbotron.appendChild(newInnerParagraphTxt);  // see comment below. 
};

//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild  

// The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position 

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let linkBtn = document.querySelector("#largerLinksBtn");
linkBtn.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("a");
    allParagraphs.forEach(links => links.style.fontSize = "165%");
});


//==========

let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", function(){
    let allAnchorTags = document.querySelectorAll("a");
    for (let i = 0; i < allAnchorTags.length; i++) {
        allAnchorTags[i].style.fontSize = "60px";
    }
})



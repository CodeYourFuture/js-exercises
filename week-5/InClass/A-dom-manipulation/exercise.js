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
console.log(document.querySelectorAll("p"))
console.log(document.querySelector("div"))
console.log(document.querySelector("#jumbotron-text"))
console.log(document.querySelectorAll(".primary-content p"))

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Thanks for visiting Bikes for Refugees!");
    }

console.log(myButton)

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBackground = document.querySelector("#bgrChangeBtn");
    changeBackground.addEventListener("click", anotherColor);

function anotherColor() {
    document.body.style.backgroundColor = "#F0F8FF"
}



console.log(changeBackground)

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addText = document.createElement("p")
addText.innerText = "Read more below."

let addTextButton = document.querySelector("#addTextBtn")

addTextButton.addEventListener("click", alertText)

function alertText () {
   let myElement =  document.querySelector(".jumbotron")
    myElement.appendChild(addText)
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let clickButton = document.querySelector("#largerLinksBtn")
clickButton.addEventListener("click", targetLink)

function targetLink () {
   let largeLinks = document.querySelectorAll("a")
   for( let i= 0; i < largeLinks.length; i++ ){
    largeLinks[i].style.fontSize = "xx-large";
   }
}
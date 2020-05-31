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

    


/*







Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

// Task 1

let getAllP = document.querySelectorAll("p");
console.log(getAllP)
let firstDiv = document.getElementsByTagName("div")[0]
console.log(firstDiv)
let getById = document.getElementById("jumbotron-text")
console.log(getById)
let allthePs = document.getElementsByClassName("primary-content")[0].getElementsByTagName("p")
console.log(allthePs)


let alertButton = document.getElementById("alertBtn")
alertButton.addEventListener('click', function () {
    alert('Thanks for visiting Bikes for Refugees!')
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let backgroundColorButton = document.getElementById("bgrChangeBtn");
let changeBackgroundColor = () => document.body.style.backgroundColor = "red";
backgroundColorButton.addEventListener('click', changeBackgroundColor);

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

// 1st argument: the type of event I'm listening to, 2nd argument: a callback function.
// 3 steps
// 1) Grab an element
// 2) Add an event listener
// 3) Add an action (function)
// Run the HTML File Using Live Server - Right click on HTML file, Open with Live server.
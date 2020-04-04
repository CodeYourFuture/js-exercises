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
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));


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

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let mychangecolor = document.querySelector("#bgrChangeBtn");
 mychangecolor.addEventListener("click",changeColor);
  function changeColor(){
    document.body.style.backgroundColor = "pink";
  }


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

document.querySelector("#addTextBtn").addEventListener("click",addText);
let myText = document.createElement("p");
myText.innerHTML = "Read more below."
let Parent = document.querySelector(".buttons");
myText.style.color = "red"
myText.style.fontSize = "150%"
function addText(){
    Parent.appendChild(myText);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let links = document.querySelectorAll("a");
document.querySelector("#largerLinksBtn").addEventListener("click",size);

function size(){
    for(let i=0; i<links.length; i++) {
        links[i].style.fontSize = "30px";
    }
}
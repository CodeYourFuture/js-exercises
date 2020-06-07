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
console.log(document.querySelector(".site-header"));
console.log(document.getElementById("jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======
 
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let click = document.getElementById("alertBtn");
click.addEventListener("click", (event) =>
  alert("Thanks for visiting Bikes for Refugees!")
);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBackgroundColor = document.getElementById("bgrChangeBtn");
changeBackgroundColor.addEventListener(
  "click",
  (event) => (document.body.style.backgroundColor = "red")
);
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

let largerLink = document.querySelector("#largerLinksBtn");

let link = document.querySelectorAll("a");
largerLink.addEventListener("click", function () {
  link.style.fontSize = "large";
});

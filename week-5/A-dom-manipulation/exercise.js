/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var changeColor = document
  .querySelector("#bgrChangeBtn")
  .addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
  });

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document
  .querySelector("#alertBtn")
  .addEventListener("click", function() {
    alert("Thanks for visiting Bikes and Refugees !");
  });

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addMoretext = document.querySelector("#addTextBtn").appendChild.textContent;

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksBtn = document.querySelector("largerLinksBtn");

largerLinksBtn.addEventListener("click", function() {});

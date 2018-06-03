/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var mybutton = document.querySelector("#bgrChangeBtn");

mybutton.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.getElementById("alertBtn");

alertButton.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addTextButton = document.querySelector("#addTextBtn");

addTextButton.addEventListener("click", function() {
  var newp = document.createElement("p");
  newp.innerText = "Read more below.";
  addTextButton.parentElement.appendChild(newp);
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var linksButton = document.querySelector("#largerLinksBtn");

linksButton.addEventListener("click", function() {
  bgrChangeBtn.style.fontSize = "3rem";
  alertBtn.style.fontSize = "3rem";
  addTextBtn.style.fontSize = "3rem";
  largerLinksBtn.style.fontSize = "3rem";
});

/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var button1 = document.querySelector("#bgrChangeBtn");
button1.addEventListener("click", change);
function change() {
  document.body.style.backgroundColor = "yellow";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var button2 = document.querySelector("#alertBtn");

button2.addEventListener("click", getChange);
function getChange() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addedText = document.querySelector("#addTextBtn");

function addText() {
  let myContainer = document.querySelectorAll(".jumbotron");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Read more below.";
  myContainer[0].appendChild(paragraph);
}

addedText.addEventListener("click", addText);

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.

var 
*/

var addedLink = document.querySelector("#largerLinksBtn");
addedLink.addEventListener("click", enlargeLink);
function enlargeLink() {
  var mylinks = document.querySelectorAll("a");
  mylinks.forEach(function(link) {
    link.style.fontSize = "3em";
  });
}

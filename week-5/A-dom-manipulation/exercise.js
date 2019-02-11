/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.body.style.backgroundColor = "yellow";

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*"alertBtn"
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var pButton = document.querySelector("#addTextBtn");
pButton.addEventListener("click", message);
function message() {
  var paragraph = document.createElement("p");
  paragraph.innerText = "Read more below.";
  pButton.appendChild(paragraph);
}

/*"addTextBtn"
Task 4
======


When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var lButton = document.querySelector("#largerLinksBtn");
var links = document.querySelectorAll("a");
console.log(lButton);
lButton.addEventListener("click", message);
function message() {
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "2em";
  }
}

/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", cambiaColore);
function cambiaColore() {
  myButton.style.backgroundColor = "yellow";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var allertButton = document.querySelector("#alertBtn");
allertButton.addEventListener("click", msgAllert);
function msgAllert() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var eventAddPar = document.querySelector("#addTextBtn");
eventAddPar.addEventListener("click", addPar);
function addPar() {
  var myPar = document.createElement("p");
  myPar.innerText = "Read more below.";
  document.getElementById("addTextBtn").appendChild(myPar);
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var eventIncreseFontLink = document.querySelector("#largerLinksBtn");
eventIncreseFontLink.addEventListener("click", increseFontLink);
function increseFontLink() {
  var anchor = document.querySelectorAll("a");
  for (var i = 0; i < anchor.length; i++) {
    anchor[i].style.fontSize = "25px";
  }
}

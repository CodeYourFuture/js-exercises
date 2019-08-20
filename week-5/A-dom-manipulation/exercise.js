/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var firstBtn = document.getElementById("bgrChangeBtn");
firstBtn.addEventListener("click", changeBC);

function changeBC() {
  firstBtn.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertThanks);

function alertThanks() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
DOES NOT WORK
*/

var newPar = document.querySelector("#addTextBtn");

addTextBtn.addEventListener("click", moreText);
function moreText() {
  var newText = document.querySelector("#buttons");
  document.createElement("p");
  buttons.appendChild(newText);
  newText.innerText = "Read more below";
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase. DOES NOT WORK
*/
var LargerLinks = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", biggerText);

function biggerText() {
  var links = document.querySelectorAll("nav-item");
  for (var i = 0; i < nav - item.length; i++) {
    nav - item[i].style.fontSize == "15px";
  }
}

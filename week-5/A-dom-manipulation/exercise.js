/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myChangeColorBtn = document.querySelector("#bgrChangeBtn");
myChangeColorBtn.addEventListener("click", changeColor);
function changeColor() {
  document.body.style.backgroundColor = "#dff1d6";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myAlertBtn = document.querySelector("#alertBtn");
myAlertBtn.addEventListener("click", alertB);
function alertB() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var myAddSomeTextBtn = document.querySelector("#addTextBtn");
myAddSomeTextBtn.addEventListener("click", addText);

function addText() {
  var paragraph = document.querySelector("#showText");
  paragraph.innerText = "Read more below";
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var myLargerLinksBtn = document.querySelector("#largerLinksBtn");
myLargerLinksBtn.addEventListener("click", increaseLinks);
function increaseLinks() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.fontSize = "25px";
  }
}

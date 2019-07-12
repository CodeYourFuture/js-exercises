/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.getElementById("bgrChangeBtn").onclick = function() {
  document.body.style.backgroundColor = "silver";
};

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.getElementById("alertBtn").onclick = function() {
  alert("Thanks for visiting Bikes for Refugees!");
};

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var newP = document.createElement("p");
var text1 = document.createTextNode("Read more below.");
newP.appendChild(text1);
document
  .querySelector("#addTextBtn")
  .addEventListener("click", addNewParagraph);
function addNewParagraph() {
  document.querySelector(".buttons").appendChild(newP);
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document
  .querySelector("#largerLinksBtn")
  .addEventListener("click", increaseFont);
function increaseFont() {
  var fontS = document.querySelectorAll("a");
  var i = 0;
  for (i; i < fontS.length; i++) {
    fontS[i].style.fontSize = "24px";
  }
}

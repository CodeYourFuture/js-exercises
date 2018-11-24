/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeClrBtn = document.getElementById("bgrChangeBtn");
function changeColor() {
  document.body.style.backgroundColor = "yellow";
}
changeClrBtn.addEventListener("click", changeColor);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function alertMe() {
  window.alert("Thanks for visiting Bikes for Refugees!");
}
document.getElementById("alertBtn").addEventListener("click", alertMe);
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const newPar = document.createElement("p");
newPar.innerText = "Read more below";
function addtext() {
  document.querySelector(".buttons").appendChild(newPar);
}
document.querySelector("#addTextBtn").addEventListener("click", addtext);
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const links = document.querySelectorAll("a");
function largerLinks() {
  for (i = 0; i < links.length; i++) {
    links[i].style.fontSize = "1.5em";
  }
}
document
  .querySelector("#largerLinksBtn")
  .addEventListener("click", largerLinks);

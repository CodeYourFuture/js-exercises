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
let allPs = document.querySelectorAll(`p`);
console.log(allPs);
let siteHeader = document.querySelector("div");
console.log(siteHeader);
let jumboId = document.querySelector("#jumbotron-text");
console.log(jumboId);
// or
let jumboId2 = document.getElementById("jumbotron-text");
console.log(jumboId2);
let chooseFirstP = document.querySelectorAll(" .primary-content p");
console.log(chooseFirstP);
//or
let chooseFirstP12 = document.querySelector(".primary-content");
let chooseFirstP22 = chooseFirstP12.querySelectorAll("p");
console.log(chooseFirstP22);
//or
let chooseFirstP3 = document
  .querySelector(".primary-content")
  .querySelectorAll("p");
console.log(chooseFirstP3);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let buttonSelect = document.querySelector("#bgrChangeBtn");
buttonSelect.addEventListener("click", function() {
  //   buttonSelect.style.backgroundcolor = "yellow";
  document.querySelector("body").style.backgroundColor = "red";
});
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addSomeText = document.querySelector("#addTextBtn");
addSomeText.addEventListener("click", function() {
  let readMore = document.querySelector(".buttons");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Read more below.";
  readMore.appendChild(paragraph);
});
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", function() {
  let allAnchors = document.querySelectorAll("a");
  for (let i = 0; i < allAnchors.length; i++) {
    allAnchors[i].style.fontSize = "55px";
  }
});

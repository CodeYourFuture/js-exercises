/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document
  .querySelector("#bgrChangeBtn")
  .addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  document.body.style.backgroundColor = "pink";
}

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var updateTitleBtn = document.querySelector("#alertBtn");
updateTitleBtn.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var updateTitleBtn = document.querySelector("#addTextBtn");
updateTitleBtn.addEventListener("click", function() {
  var myElement = document.querySelector(".buttons");
  var myParagraph = document.createElement("p");
  myParagraph.innerText = "Read more below.";
  document.querySelector("#mainArticles").appendChild(myParagraph);
});
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largeButtonText = document.querySelector("#largerLinksBtn");
largeButtonText.addEventListener("click", largeTextBIncrease);
function largeTextBIncrease() {
  var aElems = document.querySelectorAll("a");
  console.log(aElems.length);
  aElems.forEach(function(aElem) {
    aElem.style.fontSize = "3em";
  });
}

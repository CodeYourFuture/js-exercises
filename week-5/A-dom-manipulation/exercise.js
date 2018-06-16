/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector("#bgrChangeBtn").addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = "red";
}


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector("#alertBtn").addEventListener("click", alertMessage);
function alertMessage() {
  alert("Thanks for visiting Bikes for Refugees!");
}


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addParagText = document.querySelector("#addTextBtn");
var selectButtonsDiv = document.querySelector(".buttons");
addParagText.addEventListener("click", function() {
  addSomeText();
});

function addSomeText() {
  console.log("heyy");
  var newParag = document.createElement("p");
  selectButtonsDiv.appendChild(newParag);
  newParag.innerText = "Read More!";
}



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerButtons = document.querySelector("#largerLinksBtn");

var selectBtn = document.getElementsByClassName("btn");

largerButtons.addEventListener("click", function() {
 
  var i;
  for (i = 0; i < selectBtn.length; i++) {
    selectBtn[i].style.width = "150px";
  }

});
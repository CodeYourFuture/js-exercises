/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", changeBackgroundColour);

function changeBackgroundColour() {
  var body = document.querySelector("body");
  var col = ["blue", "red", "pink", "white", "green", "grey"];
  body.style.backgroundColor = col[Math.floor(Math.random() * 6)];
}

/* 
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text
 "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that 
says "Read more below."
*/
var addTextBtn = document.querySelector("#addTextBtn");
addTextBtn.addEventListener("click", addText);

function addText() {
  var string = "Read more below";
  var addParagraph = document.createElement("p");
  addParagraph.innerText = string;
  addTextBtn.appendChild(addParagraph);
}

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", makeTextBig);

function makeTextBig() {
  var anchorTag = document.querySelectorAll("a");
  var font = "1.75rem";

  for (var i = 0; i < anchorTag.length; i++) {
    anchorTag[i].style.fontSize = font;
  }
}
//largerLinksBtn.addEventListener('click', largeFont);

// function largeFont() {
//   var
// }

// var myPromise = Promise.resolve(42);
// myPromise
// .then(function(value) {
// console.log();
// return value + 50;
// })
// .then(function(){
//   console.log();
// //return
// })

// }

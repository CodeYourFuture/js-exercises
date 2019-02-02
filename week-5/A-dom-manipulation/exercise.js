/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var btn = document.getElementById("bgrChangeBtn");

btn.addEventListener("click", changeBackground);

function changeBackground() {
  var randomColorsArray = ["blue", "purple", "yellow", "green", "white"];
  var generateRandomColor = randomColorsArray[Math.floor(Math.random() * 4)];
  document.body.style.backgroundColor = generateRandomColor;
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.getElementById("alertBtn");

alertButton.addEventListener("click", alertMessage);

function alertMessage() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addText = document.querySelector("#addTextBtn");

addText.addEventListener("click", addMoreText);

function addMoreText() {
  var jumboElement = document.querySelector(".jumbotron");
  var addParagraph = document.createElement("p");

  addParagraph.textContent = `Read more below.`;
  jumboElement.appendChild(addParagraph);
}

/* Alternative based on Ali's Suggestion-

  var createElement = document.createElement("p")
  var readMoreText = document.createTextNode('Read More');
  var jumboElement = document.querySelector(".jumbotron");

  createElement.appendChild(readMoreText);
  jumboElement.appendChild(createElement);

*/




/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinks = document.querySelector("#largerLinksBtn");

largerLinks.addEventListener("click", makeLinksLarger);

function makeLinksLarger() {
  var grabLinks = document.querySelectorAll("a");
  grabLinks.forEach(function(item) {
    item.style.fontSize = "2em";
  });
}

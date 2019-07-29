/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var clickButton = document.getElementById("bgrChangeBtn");
var onButtonClick = function() {
  document.body.style.backgroundColor = "red";
};
clickButton.addEventListener("click", onButtonClick);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var clickButton = document.getElementById("alertBtn");
var onButtonClick = function() {
  alert("Thanks for visiting Bikes for Refugees!");
};
clickButton.addEventListener("click", onButtonClick);

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var bottoni = document.querySelector(".buttons");
var clickButton = document.getElementById("addTextBtn");
var onButtonClick = function() {
  var paragrafo = document.createElement("p");
  paragrafo.innerHTML = "Read more below.";
  bottoni.appendChild(paragrafo);
};
clickButton.addEventListener("click", onButtonClick);

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var clickButton = document.getElementById("largerLinksBtn");
var onButtonClick = function() {
  var link = document.querySelectorAll("a");
  for (i = 0; i < link.length; i++) {
    link[i].style.fontSize = "xx-large";
  }
};
clickButton.addEventListener("click", onButtonClick);

/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let myButton = document.querySelector("#bgrChangeBtn");

myButton.addEventListener("click", changesColor);

function changesColor() {
  let bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = "green";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let messageAlert = document.querySelector("#alertBtn");
messageAlert.addEventListener("click", message);
let button = document.querySelector("buttons");
function message() {
  let text = document.createElement("p");
  text.innerHTML = alert("Thanks for visiting Bikes for Refugees");

  button.appendChild(text);
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let Addtext = document.querySelector("#addTextBtn");
Addtext.addEventListener("click", createText);

let afterText = document.querySelector("#mainArticles");

function createText() {
  let newText = document.createElement("p");
  newText.innerText = "Read more below";
  afterText.appendChild(newText);
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerLink = document.querySelector("#largerLinksBtn");

largerLink.addEventListener("click", clickMessage);
let display = document.querySelectorAll("a");

// for (allLink of display) {
//   allLink.style.color = "red";
// }
function clickMessage() {
  //let allLink = document.querySelectorAll("a");
  for (allLink of display) {
    allLink.style.fontSize = "56";
    //allLink.innerHTML = "<h3>hello</h2>";

    //display.appendChild(allLink);
    //let display = document.querySelectorAll("a");
  }
}

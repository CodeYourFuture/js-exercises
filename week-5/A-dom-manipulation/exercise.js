/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var btn_changeColor = document.querySelector("#bgrChangeBtn");
btn_changeColor.addEventListener("click", changeBgrColor);

function changeBgrColor() {
  document.querySelector("body").style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var btn_alert = document.querySelector("#alertbtn");
btn_alert.addEventListener("click", alertTxt);

function alertTxt() {
  alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var btn_addText = document.querySelector("#addTextbtn");
btn_addText.addEventListener("click", addParagraph);

function addParagraph() {
  var newParagraph = document.createElement("p");
  var div_withId_jumbotron = document.querySelector(".jumbotron");

  newParagraph.innerText = "Read more below.";
  newParagraph.style.margin = 10;

  div_withId_jumbotron.appendChild(newParagraph);
}
/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
console.log("Hello");

var btn_largerLink = document.querySelector("#largerLinksBtn");
btn_largerLink.addEventListener("click", largeLinks);

function largeLinks() {
  var allLinks = document.querySelectorAll(
    "div.article-title.article-title--sidebar > a, a.facebook-link"
  );
  for (var el of allLinks.entries()) {
    var size = parseFloat(el[1].style.fontSize);
    size += 0.1;
    el[1].style.fontSize = size + "em";
  }
  //   allLinks.forEach(el => {
  //     el.style.innerText = "hello";
  //   });
}

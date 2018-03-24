var myButton = document.querySelector("#bgrChangeBtn");
var jumbotron = document.querySelector(".jumbotron");

myButton.addEventListener("click", function() {
  jumbotron.style.backgroundColor = "pink";
  alert("hello javascript");
});

var myButton = document.querySelector("#addTextBtn");
myButton.addEventListener("click", function() {
  var newParagraph = document.createElement("p");
  newParagraph.innerText = "Javascript is Amazing";
  newParagraph.style.backgroundColor = "green";
  newParagraph.id = "my paragraph";
  jumbotron.appendChild(newParagraph);
});

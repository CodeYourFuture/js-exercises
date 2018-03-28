var colorButton = document.querySelector("#bgrChangeBtn");

colorButton.addEventListener("click", function() {
  var box = document.querySelector(".jumbotron");
  box.style.backgroundColor = "blue";
});

var alertButton = document.querySelector("#alertBtn");

alertButton.addEventListener("click", function() {
  alert("Whatever i like");
});

var addTextButton = document.querySelector("#addTextBtn");

addTextButton.addEventListener("click", function() {
  var jumbotronBox = document.querySelector("#jumbotron-text");
  var paragraphToAdd = document.createElement("p");
  paragraphToAdd.innerText = "Adding some random texts! Blame Rares ! ";
  jumbotronBox.appendChild(paragraphToAdd);
});

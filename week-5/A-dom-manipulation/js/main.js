var myButton = document.querySelector("#bgrChangeBtn");
myButton.addEventListener("click", function() {
  var box = document.querySelector(".jumbotron");
  box.style.backgroundColor = "blue";
});

var myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", function() {
  var box = document.querySelector(".jumbotron");
  alert("Hello");
});

var myButton = document.querySelector("#addTextBtn");
myButton.addEventListener("click", function() {
  var box = document.querySelector("#addTextBtn");
  var newText = document.createElement("p");
  newText.innerText = "What do you wait now go and donate!!";
  newText.style.color = "red";
  newText.id = "myPra";
  box.appendChild(newText);
});

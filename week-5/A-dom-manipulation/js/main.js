var changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", function(){
    var background = document.querySelector(".jumbotron");
    background.style.backgroundColor = "blue";
});

var anAlert = document.querySelector("#alertBtn");
anAlert.addEventListener("click", function() {
	alert("Hello! This is an alert!");
});

var addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", function(){
    var container = document.querySelector("#changePar");
    var paragraph = document.createElement("p");
    paragraph.innerText = "Some text!";
    container.appendChild(paragraph); 
});



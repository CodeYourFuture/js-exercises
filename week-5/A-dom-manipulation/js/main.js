var changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", function(){
    var background = document.querySelector(".jumbotron");
    background.style.backgroundColor = "black";
});

var anAlert = document.querySelector("#alertBtn");
anAlert.addEventListener("click", function() {
	alert("Hello! This is an alert!");
});
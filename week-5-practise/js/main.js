// Task 1
var blueBtn = document.querySelector("#blueBtn");
var orangeBtn = document.querySelector("#orangeBtn");
var greenBtn = document.querySelector("#greenBtn");

var jumbotron = document.querySelector(".jumbotron");
var donateBtn = document.querySelector(".jumbotron .buttons a:first-of-type");
var volunteerBtn = document.querySelector(".jumbotron .buttons a:last-of-type");

blueBtn.addEventListener("click", function(){
    jumbotron.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "#000";
    volunteerBtn.style.color = "#fff";
});

orangeBtn.addEventListener("click", function() {
    jumbotron.style.backgroundColor = "#f0ad4e";
	donateBtn.style.backgroundColor = "#5751fd";
	volunteerBtn.style.backgroundColor = "#31b0d5";
	volunteerBtn.style.color = "#fff";
});

greenBtn.addEventListener("click", function() {
    jumbotron.style.backgroundColor = "#87ca8a";
	donateBtn.style.backgroundColor = "#000";
	volunteerBtn.style.backgroundColor = "#8c9c08";
});

// Task 2
var submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var email = document.querySelector("#exampleInputEmail1");
    var name = document.querySelector("#example-text-input");
    var text = document.querySelector("#exampleTextarea");

    if ((email.value === "" || !email.value.includes("@")) && name.value === "" && text.value === "") {
        email.style.backgroundColor = "red";
        name.style.backgroundColor = "red";
        text.style.backgroundColor = "red";
	} else if(email.value === "" || !(email.value.includes("@"))){
        email.style.backgroundColor = "red";
    } else if(name.value === ""){
        name.style.backgroundColor = "red";
    } else if(text.value === ""){
        text.style.backgroundColor = "red";
    } else {
        email.style.backgroundColor = "white";
		name.style.backgroundColor = "white";
        text.style.backgroundColor = "white";
        email.value = "";
        name.value = "";
        text.value = "";
        alert("Thank you for filling in the form!");
    }
});

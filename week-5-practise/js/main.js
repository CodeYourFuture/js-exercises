//// PART-1 ////

var placeToJumbotron = document.querySelector(".jumbotron");
var placeToDonateABike = document.querySelector(".btn-primary"+".btn-lrg");
var placeToVolunteer = document.querySelector(".btn-secondary");

var blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", blueButtonFunction);
function blueButtonFunction() {
    placeToJumbotron.style.backgroundColor = "#588fbd";
    placeToDonateABike.style.backgroundColor = "#ffa500";
    placeToVolunteer.style.backgroundColor = "black";
    placeToVolunteer.style.color = "white";   
}

var orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", orangeButtonFunction);
function orangeButtonFunction() {
    placeToJumbotron.style.backgroundColor = "#f0ad4e";
    placeToDonateABike.style.backgroundColor = "#5751fd";
    placeToVolunteer.style.backgroundColor = "#31b0d5";
    placeToVolunteer.style.color = "white";
}

var greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", greenButtonFunction);
function greenButtonFunction() {
    placeToJumbotron.style.backgroundColor = "#87ca8a";
    placeToDonateABike.style.backgroundColor = "black";
    placeToVolunteer.style.backgroundColor = "#8c9c08";
}

////////// PART-2 /////

var formTag = document.querySelector("form");
formTag.lastElementChild.addEventListener("click", submitButtonFunction); 
event.preventDefault();
function submitButtonFunction() {
    var emailInput = document.querySelector("#exampleInputEmail1");
    var nameInput = document.querySelector("#example-text-input");
    var describeTextInput = document.querySelector("#exampleTextarea");
    if ((emailInput.value.length === 0) || (!emailInput.value.includes("@"))) {
        emailInput.style.backgroundColor = "red";
    } else{
        emailInput.style.backgroundColor = "white";
    }
    if (nameInput.value.length === 0) {
        nameInput.style.backgroundColor = "red";
    } else{
        nameInput.style.backgroundColor = "white";
    }
    if (describeTextInput.value.length === 0) {
        describeTextInput.style.backgroundColor = "red";
    } else{
        describeTextInput.style.backgroundColor = "white";
    }
    if ((emailInput.value.length !== 0) && (emailInput.value.includes("@")) && (nameInput.value.length !== 0) && (describeTextInput.value.length !== 0)){
        emailInput.value = "";
        nameInput.value = "";
        describeTextInput.value = "";
        describeTextInput.style.backgroundColor = "white";
        emailInput.style.backgroundColor = "white";
        nameInput.style.backgroundColor = "white";
        alert("Thank you for filling out the form");
    }  
    }

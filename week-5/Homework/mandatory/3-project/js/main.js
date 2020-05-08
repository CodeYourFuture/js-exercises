let jumbotron = document.querySelector(".jumbotron");
let donateABikeBtn = document.querySelector(".buttons > .btn-primary");
let volunteerBtn = document.querySelector(".buttons > .btn-secondary");

let blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", changeToBlue);

function changeToBlue() {
    jumbotron.style.backgroundColor = "#588fbd";
    donateABikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", changeToOrange);

function changeToOrange() {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateABikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

let greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", changeToGreen);

function changeToGreen() {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateABikeBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
}

// Form
let form = document.querySelector("form");
let emailField = document.querySelector("#exampleEmailInput1");
let nameField = document.querySelector("#example-text-input");
let describeField = document.querySelector("#exampleTextArea");
let submitBtn = document.querySelector("form > .btn");
//created new variable by selecting the different ID's using document.getElementById("blueBtn");
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let jumbotron = document.getElementsByClassName("jumbotron")[0];
let buttons = document.querySelector(".buttons");
let childrenButtons = buttons.children; // [<div class="child1">]
let donateBikeBtn = childrenButtons[0];
let volunteerBtn = childrenButtons[1];
console.log(childrenButtons);
blueBtn.addEventListener("click", function () {
    jumbotron.style.background = "#588fbd";
    donateBikeBtn.style.background = "#ffa500";
    volunteerBtn.style.background = "black";
    volunteerBtn.style.color = "white";
    console.log("clicked");
});
orangeBtn.addEventListener("click", function () {
    jumbotron.style.background = "#f0ad4e";
    donateBikeBtn.style.background = "#5751fd";
    volunteerBtn.style.background = "#31b0d5";
    volunteerBtn.style.color = "white";
    console.log("clicked");
});
greenBtn.addEventListener("click", function () {
    jumbotron.style.background = "#87ca8a";
    donateBikeBtn.style.background = "black";
    volunteerBtn.style.background = "#8c9c08";
    console.log("clicked");
});
//part 2 = form 
let inputEmail = document.getElementById("exampleInputEmail1");
let inputName = document.getElementById("example-text-input");
let inputDescribeYourself = document.getElementById("exampleTextarea");
let form = document.getElementsByTagName("form")[0]; //[0] identifies the first instance of the form 
let everythingisCorrect = false;
//when the user clicks submit - it checks email, name, describeyourself - the form should not be empty 
form.onsubmit = function (event) {
    event.preventDefault(); // standard 
    let isEmailValid = (inputEmail.value.length > 0 && inputEmail.value.includes("@"));
    let isTextValid = (inputName.value.length > 0);
    let isDescriptionValid = (inputDescribeYourself.value.length > 0);
    if (!isEmailValid) { //had to change line 71 to be able to validate the email <input type=""
        inputEmail.style.background = "red";
    } else {
        inputEmail.style.background = "white";
    }
    if (!isTextValid) {
        inputName.style.background = "red";
    } else {
        inputName.style.background = "white";
    }
    if (!isDescriptionValid) {
        inputDescribeYourself.style.background = "red";
    } else {
        inputDescribeYourself.style.background = "white";
    }
    if (isEmailValid) {
        if (isTextValid) {
            if (isDescriptionValid) {
                alert("Thank you for filling out the form! Bye!");
                form.reset();
                inputEmail.style.background = "white";
                inputName.style.background = "white";
                inputDescribeYourself.style.background = "white";
            }
        }
    }
};
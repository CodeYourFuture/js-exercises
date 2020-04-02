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

//form 
let inputEmail = document.getElementById("exampleInputEmail1");
let inputName = document.getElementById("example-text-input");
let inputDescribeYourself = document.getElementById("exampleTextarea");
let form = document.getElementsByTagName("form")[0]; //[0] identifies the first instance of the form 

//when the user clicks submit - it checks email, name, describeyourself - the form should not be empty 

form.onsubmit = function (event) {
    let emailText = inputEmail.value;
    let nameText = inputName.value;
    let descriptionText = inputDescribeYourself.value;


    console.log("hello");
    if (emailText.length === 0 || !emailText.includes("@")) { //had to change line 71 to be able to validate the email <input type=""
        inputEmail.style.background = "red";
    }
    if (nameText.length === 0) {
        inputName.style.background = "red";
    }
    if (descriptionText.length === 0) {
        inputDescribeYourself.style.background = "red";
    } else {
        inputEmail.style.background === "white" && inputName.style.background === "white" && inputDescribeYourself.style.background === "white";
    }

    event.preventDefault();
    console.log(emailText);
};

// for(let i = 0; i < submit.length; i++) {
//     if(inputs[i].type.toLowerCase() == 'text') {
//         alert(inputs[i].value);
//     }
// }
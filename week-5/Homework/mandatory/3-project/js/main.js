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
});
orangeBtn.addEventListener("click", function () {
    jumbotron.style.background = "#f0ad4e";
    donateBikeBtn.style.background = "#5751fd";
    volunteerBtn.style.background = "#31b0d5";
    volunteerBtn.style.color = "white";
});
greenBtn.addEventListener("click", function () {
    jumbotron.style.background = "#87ca8a";
    donateBikeBtn.style.background = "black";
    volunteerBtn.style.background = "#8c9c08";
});

// blueBtn.addEventListener("click", blueBtnChanges) // example inc. function written with a defined name

// function blueBtnChanges() {
//     jumbotron.style.background = "#588fbd";
//     donateBikeBtn.style.background = "#ffa500";
//     volunteerBtn.style.background = "black";
//     volunteerBtn.style.color = "white";
// };
//part 2 = form 
let inputEmail = document.getElementById("exampleInputEmail1");
let inputName = document.getElementById("example-text-input");
let inputDescribeYourself = document.getElementById("exampleTextarea");
let form = document.getElementsByTagName("form")[0]; //[0] identifies the first instance of the form 
//when the user clicks submit - it checks email, name, describeyourself - the form should not be empty 
form.onsubmit = function (event) {
    let emailText = inputEmail.value;
    let nameText = inputName.value;
    let descriptionText = inputDescribeYourself.value;
    let inputIsValid = false; //alert
    // console.log("hello");
    let newEmailResult = true;
    let newTextResult = true;
    let newDescriptionTextResult = true;
    // 4th function that validates, gives an alert, and then clears the form 

    //====checking email is checking and validating the conditions===
    function checkEmailInput() {
        if (emailText.length == 0 || !emailText.includes("@")) {
            inputEmail.style.background = "red";
            newEmailResult = false;
        } else {
            inputEmail.style.background = "white";
            newEmailResult = true;
        }; //had to change line 71 inside the html.index file, to be able to get the form field to change color 
        console.log(newEmailResult);
    };
    checkEmailInput();
    //====checking name is checking and validating the conditions===
    function nameTextInput() {
        if (nameText.length == 0) {
            inputName.style.background = "red";
            newTextResult = false;
        } else {
            inputName.style.background = "white";
            newTextResult = true;
        }
        console.log(newTextResult);
    }
    nameTextInput();
    //====checking description is checking and validating the conditions ===
    function descriptionTextInput() {
        if (descriptionText.length == 0) {
            inputDescribeYourself.style.background = "red";
            newDescriptionTextResult = false;
        } else {
            inputDescribeYourself.style.background = "white";
            newDescriptionTextResult = true;
        }
        console.log(newDescriptionTextResult);
    }
    descriptionTextInput();
    //console.log(emailText);    
    let everythingisCorrect = false;
    if (newEmailResult && newTextResult && newDescriptionTextResult) {
        everythingisCorrect = true;
    }
    if (everythingisCorrect) {
        alert("Thank you for filling out the form!");
        form.reset()
    }
    event.preventDefault();
};

/* - example of this question using if statement
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
*/
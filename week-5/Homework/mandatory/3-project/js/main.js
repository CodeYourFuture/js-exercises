//created new variable by selecting the different ID's using document.getElementById("blueBtn");
// I assigned the html tag (by using the document.getElementByID) to a new variable called blue button
//https://www.w3schools.com/jsref/prop_element_children.asp  - 
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let jumbotron = document.getElementsByClassName("jumbotron")[0];
let buttons = document.querySelector(".buttons");

let childrenButtons = buttons.children; 
let donateBikeBtn = childrenButtons[0]; 
let volunteerBtn = childrenButtons[1]; 



blueBtn.addEventListener("click", function () {
    jumbotron.style.background = "#588fbd";
    donateBikeBtn.style.background = "#ffa500";
    volunteerBtn.style.background = "black";
    volunteerBtn.style.color = "white";
    console.log("hello");
});


orangeBtn.addEventListener("click", function () {
    jumbotron.style.background = "#f0ad4e";
    donateBikeBtn.style.background = "#5751fd";
    volunteerBtn.style.background = "#31b0d5";
    volunteerBtn.style.color = "white";
    console.log("hello");
});

greenBtn.addEventListener("click", function () {
    jumbotron.style.background = "#87ca8a";
    donateBikeBtn.style.background = "black";
    volunteerBtn.style.background = "#8c9c08";
    console.log("hello");
});


let form = document.getElementsByTagName("form")[0];
let inputEmail = document.getElementById("exampleInputEmail1"); 
let inputName = document.getElementById("example-text-input");
let inputDescribeYourself = document.getElementById("exampleTextarea");

form.onsubmit = function (event) {
    let emailText = inputEmail.value;
    let nameText = inputName.value;
    let descriptionText = inputDescribeYourself.value;
    

    let newEmailResult = true;
    let newTextResult = true;
    let newDescriptionTextResult = true;
    

    function checkEmailInput() {
        if (emailText.length == 0 || !emailText.includes("@")) {
            inputEmail.style.background = "red";
            newEmailResult = false;
        } else {
            inputEmail.style.background = "white";
            newEmailResult = true;
        };
        
    };
    checkEmailInput();

    
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
    
    let everythingIsCorrect = false;

    if (newEmailResult && newTextResult && newDescriptionTextResult) {
        everythingIsCorrect = true;
    }
    if (everythingIsCorrect) {
        alert("Thank you for filling out the form! Bye!");
        form.reset();
    }
    event.preventDefault();  
};

/* 
reading sources - 
https://formvalidation.io/
selecting the first instance of 
https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods
reset() method
https://www.geeksforgeeks.org/how-to-reset-a-form-using-jquery-with-reset-method/
validForm
https://www.w3schools.com/js/js_validation.asp
https://codeburst.io/javascript-understand-arrow-function-syntax-ab4081bba85b
*/
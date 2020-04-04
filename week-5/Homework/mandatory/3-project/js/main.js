//created new variable by selecting the different ID's using document.getElementById("blueBtn");
// I assigned the html tag (by using the document.getElementByID) to a new variable called blue button
//https://www.w3schools.com/jsref/prop_element_children.asp  - 
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let jumbotron = document.getElementsByClassName("jumbotron")[0];
let buttons = document.querySelector(".buttons");
//var a = b 
let childrenButtons = buttons.children; // created a variable called childrenButtons (line 58) and the value I am assigning is all the children of the class buttons on line 59 and 60. Which are the next two lines just after html buttons tag.
let donateBikeBtn = childrenButtons[0]; //donateBike button is being a assigned the as the first child of buttons = [0]
let volunteerBtn = childrenButtons[1]; //donateBike button is being a assigned the as the second child of buttons = [1]

//console.log(childrenButtons);
//so on line 16, i called blueBtn variable and added an eventListner which is a function that allow the click event. So inside the function i am calling
blueBtn.addEventListener("click", function () {
    jumbotron.style.background = "#588fbd";
    donateBikeBtn.style.background = "#ffa500";
    volunteerBtn.style.background = "black";
    volunteerBtn.style.color = "white";
    console.log("hello");
});

//another version of a named function from line 24 - line 31
// blueBtn.addEventListener("click", blueBtnChanges);
// function blueBtnChanges() {
//     jumbotron.style.background = "#588fbd";
//     donateBikeBtn.style.background = "#ffa500";
//     volunteerBtn.style.background = "black";
//     volunteerBtn.style.color = "white";
// };

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

//part 2 = form 
let form = document.getElementsByTagName("form")[0]; //[0] identifies the first instance of the form 
let inputEmail = document.getElementById("exampleInputEmail1"); //line 70  - email
let inputName = document.getElementById("example-text-input"); // name
let inputDescribeYourself = document.getElementById("exampleTextarea"); // description

//when the user clicks submit - it checks email, name, describeYourself - the form should not be empty 

form.onsubmit = function (event) {
    let emailText = inputEmail.value;
    let nameText = inputName.value;
    let descriptionText = inputDescribeYourself.value;
    //   let inputIsValid = false; //alert
    // console.log("hello");

    let newEmailResult = true;
    let newTextResult = true;
    let newDescriptionTextResult = true;
    // 4th function that validates, gives an alert, and then clears the form 

    // console.log(newEmailResult);
    // console.log(newTextResult);
    // console.log(newDescriptionResult);

    //====checking email is checking and validating the conditions===
    function checkEmailInput() {
        if (emailText.length == 0 || !emailText.includes("@")) {
            inputEmail.style.background = "red";
            newEmailResult = false;
        } else {
            inputEmail.style.background = "white";
            newEmailResult = true;
        }; //had to change line 71 inside the html.index file, to be able to get the form field to change color 
        // console.log(newEmailResult);
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

    //creating an alert function and this section also resets the form to "blank"
    let everythingIsCorrect = false;

    if (newEmailResult && newTextResult && newDescriptionTextResult) {
        everythingIsCorrect = true;
    }
    if (everythingIsCorrect) {
        alert("Thank you for filling out the form! Bye!");
        form.reset();
    }
    event.preventDefault(); // this stops the page refreshing 
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
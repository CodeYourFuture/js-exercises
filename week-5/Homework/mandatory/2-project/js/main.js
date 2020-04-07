
/*
  
- When clicking **blue** it should change:
- **Jumbotron** background color to `#588fbd`
- **Donate a bike** button background color to `#ffa500`
- **Volunteer** button background color to `black` and text color to `white`

- When clicking **orange** it should change:
- **Jumbotron** background color to `#f0ad4e`
- **Donate a bike** button background color to `#5751fd`
- **Volunteer** button background color to `#31b0d5` and text color to `white`
- When clicking **green** it should change:
- **Jumbotron** background color to `#87ca8a`
- **Donate a bike** button background color to `black`
- **Volunteer** button background color to `#8c9c08`

*/

document.querySelector("#blueBtn").addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.background = "#588fbd";
    document.querySelector(".buttons").children[0].style.background = "#ffa500";
    document.querySelector(".buttons").children[1].style.background = "black";
    document.querySelector(".buttons").children[1].style.color = "white";
});


document.querySelector("#orangeBtn").addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.background = "#f0ad4e";
    document.querySelector(".buttons").children[0].style.background = "#5751fd";
    document.querySelector(".buttons").children[1].style.background = "#31b0d5";
    document.querySelector(".buttons").children[1].style.color = "white";
});


document.querySelector("#greenBtn").addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.background = "#87ca8a";
    document.querySelector(".buttons").children[0].style.background = "black";
    document.querySelector(".buttons").children[1].style.background = "#8c9c08";
    console.log("hello");
});
 
 
function init(){
    
}



//2- forms
let form = document.getElementsByTagName("form")[0];




function formValidate()
{

    let emailText = inputEmail.value;
    let nameText = inputName.value;
    let descriptionText = inputDescribeYourself.value;


    let newEmailResult = true;
    let newTextResult = true;
    let newDescriptionTextResult = true;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   return false;//checkEmailInput(emailText)

}

function checkEmailInput(txtEmail) {
    if (txtEmail.length != 0 && txtEmail.match(regexEmail)) {
        inputEmail.style.background = "white";
        return true;
    } else {
        inputEmail.style.background = "red";
        newEmailResult = false;
        return false;
    }; 
}

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



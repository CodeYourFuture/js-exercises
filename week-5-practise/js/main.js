////////Part 1//////////
var jumbotron = document.querySelector(".jumbotron");
var jumbotronButton = document.querySelector(".buttons").children;

var blueBtn = document.querySelector("#blueBtn"); //blue button
blueBtn.addEventListener("click", colorBlue);

function colorBlue() {
    jumbotron.style.backgroundColor = "#588fbd";
    jumbotronButton[0].style.backgroundColor = "#ffa500";
    jumbotronButton[1].style.backgroundColor = "black";
    jumbotronButton[0].style.color = "white";
}

var orangeBtn = document.querySelector("#orangeBtn"); //orange button
orangeBtn.addEventListener("click", colorOrange);

function colorOrange() {
    jumbotron.style.backgroundColor = "#f0ad4e";
    jumbotronButton[0].style.backgroundColor = "#5751fd";
    jumbotronButton[1].style.backgroundColor = "#31b0d5";
    jumbotronButton[0].style.color = "white";
}

var greenBtn = document.querySelector("#greenBtn"); //green button
greenBtn.addEventListener("click", colorGreen);

function colorGreen() {
    jumbotron.style.backgroundColor = "#87ca8a";
    jumbotronButton[0].style.backgroundColor = "black";
    jumbotronButton[1].style.backgroundColor = "#8c9c08";

}


////////part 2//////////
var emailCheck = document.querySelector("#exampleInputEmail1");
var nameCheck = document.querySelector("#example-text-input");
var textCheck = document.querySelector("#exampleTextarea");

// //To obtain the 2 input and the textarea tags
//var labelText = document.querySelectorAll(".form-control");
// console.log(labelText); ////3 nodes

var formBtn = document.querySelector("form").children; /// 3 div and 1 form
formBtn[3].addEventListener("click", validateForm);

function validateForm() {
    event.preventDefault();
    if ((emailCheck.value != "") && (nameCheck.value != "") && (textCheck.value != "")) {

        if (emailCheck.value.includes("@")) {
            alert("Thank you");
            emailCheck.value = "";
            nameCheck.value = "";
            textCheck.value = "";
        } else {

            emailCheck.style.backgroundColor = "red";
        }
    } else {
        emailCheck.style.backgroundColor = "red";
        nameCheck.style.backgroundColor = "red";
        textCheck.style.backgroundColor = "red";
    }
}
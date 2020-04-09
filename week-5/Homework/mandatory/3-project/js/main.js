let btnBlue = document.querySelector("#blueBtn");
let btnDiv = document.querySelectorAll(".btn-lrg");
let jumbortonn = document.querySelector(".jumbotron");
let getChild1 = btnDiv[0]
let getChild2 = btnDiv[1];
let btnOrang = document.querySelector("#orangeBtn");
let btnGreen = document.querySelector("#greenBtn");
let btnSubmit = document.querySelectorAll("button")[4];
let email1 = document.getElementById("exampleInputEmail1");
let name = document.querySelector("#example-text-input");
let describe = document.querySelector("#exampleTextarea");
let eleForm = document.getElementsByTagName("form");

function btnBackColor() {

    jumbortonn.style.backgroundColor = "#588fbd"
    getChild1.style.backgroundColor = "#ffa500"
    getChild2.style.backgroundColor = "black"
    getChild2.style.color = "white"
}

function btnOrangeFunc() {
    jumbortonn.style.backgroundColor = "#f0ad4e";
    getChild1.style.backgroundColor = "#5751fd"
    getChild2.style.backgroundColor = "white"
    getChild2.style.color = "black"
}

function btnGreenFunc() {
    jumbortonn.style.backgroundColor = "#87ca8a";
    getChild1.style.backgroundColor = "#5751fd"
    getChild2.style.backgroundColor = "#8c9c08"
    getChild2.style.color = "black"
}

function btnSubmitFunc(event) {
    let errorMessage = "";
    if (email1.value == "" || !email1.includs("@")) {
        errorMessage += "emails are empty\n";
        email1.style.backgroundColor = "red";
        event.preventDefault()
        if (name.value == "" || describe.value == "") {
            event.preventDefault()
        }
    }
    if (name.value == "") {
        name.style.backgroundColor = "red";
        errorMessage += "name is empty\n";
        event.preventDefault()
    }
    if (describe.value == "") {
        describe.style.backgroundColor = "red"
        errorMessage += "describe is empty";
        event.preventDefault()
    }


}

btnBlue.addEventListener("click", btnBackColor);
btnOrang.addEventListener("click", btnOrangeFunc);
btnGreen.addEventListener("click", btnGreenFunc);
btnSubmit.addEventListener("click", btnSubmitFunc);
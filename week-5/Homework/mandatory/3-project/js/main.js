let btnBlue = document.querySelector("#blueBtn");
let btnDiv = document.querySelectorAll(".btn-lrg");
let jumbortonn = document.querySelector(".jumbotron");
let getChild1 = btnDiv[0]
let getChild2 = btnDiv[1];
let btnOrang = document.querySelector("#orangeBtn");
let btnGreen = document.querySelector("#greenBtn")

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

btnBlue.addEventListener("click",btnBackColor);
btnOrang.addEventListener("click", btnOrangeFunc);
btnGreen.addEventListener("click", btnGreenFunc)


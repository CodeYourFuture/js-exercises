let btnBlue = document.querySelector("#blueBtn");
let btnDiv = document.querySelectorAll(".btn-lrg");
let jumbortonn = document.querySelector(".jumbotron");
let getChild1 = btnDiv[0]
let getChild2 = btnDiv[1];
let btnOrang = document.querySelector("#orangeBtn");

function btnBackColor() {
    
    jumbortonn.style.backgroundColor = "#588fbd"
    getChild1.style.backgroundColor = "#ffa500"
    getChild2.style.backgroundColor = "black"
}
function btnOrangeFunc() {
    jumbortonn.style.backgroundColor = "#f0ad4e";
    getChild1.style.backgroundColor = "#5751fd"
    getChild2.style.backgroundColor = "white"
}

btnBlue.addEventListener("click",btnBackColor);
btnOrang.addEventListener("click", btnOrangeFunc)


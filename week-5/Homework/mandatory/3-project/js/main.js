let btnBlue = document.querySelector("#blueBtn");
let btnDiv = document.querySelectorAll(".btn-lrg");
let getChild1 = btnDiv[0]
let getChild2 = btnDiv[1];
function btnBackColor() {
    let jumbortonn = document.querySelector(".jumbotron");
    jumbortonn.style.backgroundColor = "#588fbd"
    getChild1.style.backgroundColor = "#ffa500"
    getChild2.style.backgroundColor = "black"
}
btnBlue.addEventListener("click",btnBackColor);



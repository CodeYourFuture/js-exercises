
/////Blue button Click ///////

var blueBtn = document.querySelector("#blueBtn"); // getting blue button
blueBtn.addEventListener("click",doBlueStuff);
var blueBtnClass = document.querySelector(".jumbotron"); // gettimg jumbotron class
var divBtn = document.querySelector(".buttons"); // getting div buttons class


function doBlueStuff(){    
    blueBtnClass.style.backgroundColor = "#588fbd";
//////////////donate a bike button changes////////////////
    
    divBtn.firstElementChild.style.backgroundColor = "#ffa500";
//////////////// change to  Volunteer Button//////////////////
    divBtn.lastElementChild.style.backgroundColor = "black";
    divBtn.lastElementChild.style.color = "white";
}


/////////////////////// click on orange button /////////////
var orangeBtnClick = document.querySelector("#orangeBtn");
orangeBtnClick.addEventListener("click",doOrangeStuff)

function doOrangeStuff(){
blueBtnClass.style.backgroundColor = "#f0ad4e";
divBtn.firstElementChild.style.backgroundColor = "#5751fd";
divBtn.lastElementChild.style.backgroundColor = "#31b0d5";
divBtn.lastElementChild.style.color = "white";
}
///////////Click om Green Button //////////////
var greenBtnClick = document.querySelector("#greenBtn");
greenBtnClick.addEventListener("click",doGreenStuff);

function doGreenStuff(){
blueBtnClass.style.backgroundColor = "#87ca8a";
divBtn.firstElementChild.style.backgroundColor = "black";
divBtn.lastElementChild.style.backgroundColor = "#8c9c08";
}
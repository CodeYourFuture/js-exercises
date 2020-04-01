let blueBtn =  document.getElementById("blueBtn");

let onBlueBtn = function (){
    let jumbo = document.getElementsByClassName("jumbotron");
    jumbo[0].style.backgroundColor = "#588fbd";
    let donAb = document.getElementsByClassName("btn btn-primary btn-lrg");
    donAb[0].style.backgroundColor = "#ffa500";
    let volB = document.getElementsByClassName("btn btn-secondary btn-lrg");
    volB[0].style.backgroundColor = "black";
    volB[0].style.color = "white";
}
blueBtn.addEventListener("click", onBlueBtn);


let orangeBtn =  document.getElementById("orangeBtn");

let onOrangeBtn = function (){
    let jumbo = document.getElementsByClassName("jumbotron");
    jumbo[0].style.backgroundColor = "#f0ad4e";
    let donAb = document.getElementsByClassName("btn btn-primary btn-lrg");
    donAb[0].style.backgroundColor = " #5751fd";
    let volB = document.getElementsByClassName("btn btn-secondary btn-lrg");
    volB[0].style.backgroundColor = " #31b0d5";
    volB[0].style.color = "white";
}
orangeBtn.addEventListener("click", onOrangeBtn);


let greenBtn =  document.getElementById("greenBtn");

let onGreenBtn = function (){
    let jumbo = document.getElementsByClassName("jumbotron");
    jumbo[0].style.backgroundColor = "#87ca8a";
    let donAb = document.getElementsByClassName("btn btn-primary btn-lrg");
    donAb[0].style.backgroundColor = "black";
    let volB = document.getElementsByClassName("btn btn-secondary btn-lrg");
    volB[0].style.backgroundColor = "#8c9c08";
    volB[0].style.color = "white";
}
greenBtn.addEventListener("click", onGreenBtn);

let checkMail = function(e){
    e.event.preventDefault() 
let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
if (exampleInputEmail1.value.length >0)
{ 
    exampleInputEmail1.style.backgroundColor = ("red");
return true;

}
};


let subm = document.getElementsByClassName("btn btn-primary");
subm[0].addEventListener("click", checkMail(e))
console.log(checkMail());


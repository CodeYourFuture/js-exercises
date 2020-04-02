let blueBtn =  document.getElementById("blueBtn");
let orangeBtn =  document.getElementById("orangeBtn");
let greenBtn =  document.getElementById("greenBtn");
let submitBtn = document.querySelector("form button");
let jumbotron = document.querySelector(".jumbotron");
let donate = document.getElementsByClassName("btn btn-primary btn-lrg");
let volunteer = document.getElementsByClassName("btn btn-secondary btn-lrg");
let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let descrInput = document.getElementById("exampleTextarea");
let form =  document.querySelector("form");



let blueBtnClick = function (){

    jumbotron.style.backgroundColor = "#588fbd";
    donate[0].style.backgroundColor = "#ffa500";
    volunteer[0].style.backgroundColor = "black";
    volunteer[0].style.color = "white";
}

blueBtn.addEventListener("click", blueBtnClick);


let orangeBtnClick = function (){

    jumbotron.style.backgroundColor = "#f0ad4e";
    donate[0].style.backgroundColor = "#5751fd";
    volunteer[0].style.backgroundColor = "#31b0d5";
    volunteer[0].style.color = "white";
}

orangeBtn.addEventListener("click", orangeBtnClick);

let greenBtnClick = function (){

    jumbotron.style.backgroundColor = "#87ca8a";
    donate[0].style.backgroundColor = "black";
    volunteer[0].style.backgroundColor = "#8c9c08";
    volunteer[0].style.color = "white";
}
greenBtn.addEventListener("click", greenBtnClick);


let mailCheck = function(){
   
    if ((emailInput.value.length === 0 ) || ( !emailInput.value.includes("@") ))
    { 
        emailInput.style.backgroundColor = "red";
        return false;
    } else {
        return true
    }
}

let nameCheck = function(){

    if (nameInput.value.length === 0)
    {
        nameInput.style.backgroundColor = "red";
        return false;
    } else {
        return true
    }
}

let descrCheck = function(){
    
    if (descrInput.value.length === 0)
    { 
        descrInput.style.backgroundColor = "red";
        return false;
    } else {
        return true
    }
}

let checkForm = function(event){
    event.preventDefault();

 if(mailCheck() || nameCheck() || descrCheck())
     {
        alert("thank you for filling out the form");
        form.reset();
        descrInput.style.backgroundColor = "white";
        nameInput.style.backgroundColor = "white";
        emailInput.style.backgroundColor = "white";
     };
};


submitBtn.addEventListener("click", checkForm);

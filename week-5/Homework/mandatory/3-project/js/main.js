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


let checkMail = function(){
   
let exampleInputEmail1 = document.getElementById("exampleInputEmail1");
if ((exampleInputEmail1.value.length <=0) || (!exampleInputEmail1.value.includes("@")))
{ 
    exampleInputEmail1.style.backgroundColor = ("red");
    return false;

}
else { 
    exampleInputEmail1.style.backgroundColor = ("white");
    return true;
}


};

let checkName = function(event){
let nameInput = document.getElementById("example-text-input");
console.log(nameInput);
if (nameInput.value.length <=0)
{
    nameInput.style.backgroundColor = ("red");
    
    return false;

}
else { 
    nameInput.style.backgroundColor = ("white");
    return true;
}

}

let checkDescr = function(event){
    let descrInput = document.getElementById("exampleTextarea");
    console.log(descrInput.value);
    if (descrInput.value.length <=0)
    { 
        descrInput.style.backgroundColor = ("red");
        return false;
    
    }
    else { 
        descrInput.style.backgroundColor = ("white");
        return true;
    }
    
    }
let checkForm = function(){
    event.preventDefault() 
 if(
     checkMail()&&
     checkName()&&
     checkDescr())
     {
        alert ("thank you for filling out the form");
       let formo =  document.querySelector("form");
       formo.reset();
     };
     

};
let subm = document.querySelector("form button");

subm.addEventListener("click", checkForm);
    

let myBlueButton = document.querySelector("#blueBtn");
let myJumbotron = document.querySelector(".jumbotron");
let myButtons = document.querySelectorAll("div[class *=\"buttons\"]>a");
let myDonateBike = myButtons[0];
let myVolunteer = myButtons[1];
let myOrangeButton = document.querySelector("#orangeBtn");
let myGreenButton = document.querySelector("#greenBtn");
let mySubmitButton = document.querySelector("button[type*=\"submit\"]");
let myRegisterInput = document.querySelectorAll("div[class*=\"form-group\"]");
let MyArrayOfMyRegisterInput= Array.from(myRegisterInput);
myBlueButton.addEventListener("click", changeWithBlueButton);
function changeWithBlueButton() {
  myJumbotron.style.backgroundColor = `#588fbd`;
  myDonateBike.style.backgroundColor = `#ffa500`;
  myVolunteer.style.backgroundColor = "black";
  myVolunteer.style.color = "white";
}
myOrangeButton.addEventListener("click",changeWithOrangeButton);
function changeWithOrangeButton(){
    myJumbotron.style.backgroundColor = `#f0ad4e`;
    myDonateBike.style.backgroundColor = `#5751fd`;
    myVolunteer.style.backgroundColor = "#31b0d5";
    myVolunteer.style.color = "white";
}
myGreenButton.addEventListener("click",changeWithGreenButton);
function changeWithGreenButton(){
    myJumbotron.style.backgroundColor = `#87ca8a`;
    myDonateBike.style.backgroundColor = `black`;
    myVolunteer.style.backgroundColor = "#8c9c08";
}
mySubmitButton.addEventListener("click",checkValid); 
function checkValid(event){
    if(!(MyArrayOfMyRegisterInput[0].querySelector("input").value.length > 0) ||
      !(MyArrayOfMyRegisterInput[0].querySelector("input").value.split("").includes("@")))
    {
        MyArrayOfMyRegisterInput[0].querySelector("input").style.backgroundColor = "red";
        MyArrayOfMyRegisterInput[0].querySelector("input").value = "please try again";
        event.preventDefault();
    }
    if(!(MyArrayOfMyRegisterInput[1].querySelector("input").value.length > 0)){
        MyArrayOfMyRegisterInput[1].querySelector("input").style.backgroundColor = "red";
        event.preventDefault();
    }
    if(!(MyArrayOfMyRegisterInput[2].querySelector("#exampleTextarea").value.length > 0)){
        MyArrayOfMyRegisterInput[2].querySelector("#exampleTextarea").style.backgroundColor = "red";
        event.preventDefault();
    }
    else {
        alert("thank you for filling out the form");
        MyArrayOfMyRegisterInput[0].querySelector("input").value = "";
        MyArrayOfMyRegisterInput[1].querySelector("input").value = "";
        MyArrayOfMyRegisterInput[2].querySelector("#exampleTextarea").value = "";
    }
}

       

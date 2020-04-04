let myBlueButton = document.querySelector("#blueBtn");
let myJumbotron = document.querySelector(".jumbotron");
let myButtons = document.querySelectorAll("div[class *=\"buttons\"]>a");
let myDonateBike = myButtons[0];
let myVolunteer = myButtons[1];
let myOrangeButton = document.querySelector("#orangeBtn");
let myGreenButton = document.querySelector("#greenBtn");
let mySubmitButton = document.querySelectorAll("form button");
let myRegisterInput = document.querySelectorAll("div[class*=\"form-group\"]");
let MyArrayOfMyRegisterInput= Array.from(myRegisterInput);
let myAlert = document.querySelectorAll(".alert");
let myArrayOfmyAlert = Array.from(myAlert);
let myEmailInput = document.querySelectorAll("div[class*=\"form-group\"]>input[id*=exampleInputEmail1");
let myNameInput = document.querySelectorAll("div[class*=\"form-group\"]>input[id*=\"example-text-input\"]");
let myDescribeInput =document.querySelectorAll("div[class*=\"form-group\"]>textarea[id*=\"exampleTextarea\"]");
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
 function checkValid(){
    for(let i=0;i<MyArrayOfMyRegisterInput.length;i++){
        if(MyArrayOfMyRegisterInput.length > 0 && MyArrayOfMyRegisterInput[0].includes("@")){
        myAlert.innerHTML = "thank you for filling out the form";
        MyArrayOfMyRegisterInput.forEach( x => x = "");
        }
        else{
            MyArrayOfMyRegisterInput[i].style.backgroundColor = 'red';
        }
    }
 }    
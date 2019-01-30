
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


/////// When Submit is Clicked ////////
var formTag = document.querySelector("form");
    formTag.lastElementChild.addEventListener("click",validateForm); //getting submit button
    
    function validateForm() {
        var emailInput = document.querySelector("#exampleInputEmail1");
        var nameInput = document.querySelector("#example-text-input");
        var describeMe = document.querySelector("#exampleTextarea");
        event.preventDefault();
        if (emailInput.value.length === 0){
            emailInput.style.backgroundColor = "red"
        }
        else if (nameInput.value.length === 0){
            nameInput.style.backgroundColor = "red";
        }
        else if (describeMe.value.length === 0){
            describeMe.style.backgroundColor = "red";

        }
         else if (!emailInput.value.includes("@")){
            emailInput.style.backgroundColor = "red";
         }
            
        else{
            
            alert("Thank you for filling out the form");
            emailInput.value = "";
            nameInput.value = "";
            describeMe.value = "";
            describeMe.style.backgroundColor = "white";
            emailInput.style.backgroundColor = "white"
            nameInput.style.backgroundColor = "white";

        }
    }
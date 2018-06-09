

var blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", changeColorBlueBttn);
var orangeBttn = document.querySelector("#orangeBtn");
orangeBttn.addEventListener("click", changeColorOrangeBttn);
var greenBttn = document.querySelector("#greenBtn");
greenBttn.addEventListener("click", changeColorGreenBttn)
function changeColorBlueBttn(){
    document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector(".buttons .btn-primary").style.backgroundColor = "#ffa500";
    document.querySelector(".btn-secondary").style.backgroundColor = "black";
    document.querySelector(".btn-secondary").style.color = "white";
}
function changeColorOrangeBttn(){
    document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
    document.querySelector(".buttons .btn-primary").style.backgroundColor = `#5751fd`;
    document.querySelector(".btn-secondary").style.backgroundColor =  `#31b0d5`;
    document.querySelector(".btn-secondary").style.color = "white";
}
function changeColorGreenBttn(){
    document.querySelector(".jumbotron").style.backgroundColor =`#87ca8a`;
    document.querySelector(".buttons .btn-primary").style.backgroundColor = `black`;
    document.querySelector(".btn-secondary").style.backgroundColor =  `#8c9c08`;
    document.querySelector(".btn-secondary").style.color = "white";
}

var submitBttn = document.querySelector("button[type=submit]");
submitBttn.addEventListener("click", submitInfo);

function submitInfo(){

    var emailInput = document.getElementById("exampleInputEmail1");
    var textInput = document.getElementById('example-text-input');
    var textAreaInput = document.getElementById("exampleTextarea");
    var atpos = emailInput.value.indexOf("@");
    var dotpos = emailInput.value.lastIndexOf(".");
    
    

    if (emailInput.value == "" || textInput.value == "" || textAreaInput.value == ""){
        emailInput.style.backgroundColor = "red";
        textInput.style.backgroundColor = 'red';
        textAreaInput.style.backgroundColor = "red";
        return false;
    }
    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailInput.value.length){
        emailInput.style.backgroundColor = "red";
        return false;
    }
    else {


      alert("Thank you for filling outthe form");
      emailInput.value = "";
      textInput.value = "";
      textAreaInput.value = "";
    }

}
      
    



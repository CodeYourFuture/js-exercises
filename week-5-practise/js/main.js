var blueBtn = document.querySelector("#blueBtn");
var orangeBtn = document.querySelector("#orangeBtn");
var greenBtn = document.querySelector("#greenBtn");
var jumbotronBox = document.querySelector(".jumbotron");
var donateBtn = document.querySelector(".buttons a:first-child");
var volunteerBtn = document.querySelector(".buttons a:nth-child(2)");

blueBtn.addEventListener("click", function() {
  jumbotronBox.style.backgroundColor = `#588fbd`;
  donateBtn.style.backgroundColor = `#ffa500`;
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", function() {
  jumbotronBox.style.backgroundColor = `#f0ad4e`;
  donateBtn.style.backgroundColor = `#5751fd`;
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
});

greenBtn.addEventListener("click", function() {
  jumbotronBox.style.backgroundColor = `#87ca8a`;
  donateBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = `#8c9c08`;
});

var email = document.querySelector("#exampleInputEmail1");
var nameArea = document.querySelector("#example-text-input");
var description = document.querySelector("#exampleTextarea");
var submitBtn = document.querySelector("form button:last-child");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  if ((email.value === "" || !email.value.includes("@")) && name.value === "" && text.value === "") {
    email.style.backgroundColor = "red"; 
     nameArea.style.backgroundColor = "red"; 
    description.style.backgroundColor = "red"; 
   	} else if(email.value === "" || !(email.value.includes("@"))){ 
    email.style.backgroundColor = "red"; 
    } else if(name.value === ""){ 
     nameArea.style.backgroundColor = "red"; 
    } else if(text.value === ""){ 
    description.style.backgroundColor = "red"; 
    } else { 
    email.style.backgroundColor = "white"; 
    nameArea.style.backgroundColor = "white"; 
    description.style.backgroundColor = "white"; 
    nameArea.value = ""; 
    description.value = ""; 
   alert("Thank you for filling in the form!"); 
  }
  });




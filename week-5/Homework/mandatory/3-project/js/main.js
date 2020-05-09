//making changes to the blue button
var blue = document.querySelector("#blueBtn");
blue.addEventListener("click", () => //this add event listener waits for an event to happen such as user clicking
{
  //styling the main jumbotron background to blue
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  //changing the background color to orange when user clicks on donate a bike
  document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#ffa500";
  //changing the background color to black and font to white
  document.querySelector(".btn.btn-secondary.btn-lrg").setAttribute("style", "background-color: black; color: white");
});
//same process for the other buttons
var orange = document.querySelector("#orangeBtn");
orange.addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "#5751fd";
  document.querySelector(".btn.btn-secondary.btn-lrg").setAttribute("style", "background-color: #31b0d5; color: white");
});

var green = document.querySelector("#greenBtn");
green.addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".btn.btn-primary.btn-lrg").style.backgroundColor = "black";
  document.querySelector(".btn.btn-secondary.btn-lrg").setAttribute("style", "background-color: #8c9c08; color: white");
});
//part 2
let send = document.querySelector("#sendButton");
send.addEventListener("click", () => {
  event.preventDefault();
  var name = document.querySelector("#example-text-input");
  var email = document.querySelector("#exampleInputEmail1");
  var about = document.querySelector("#exampleTextarea");

  if (
    name.value.length === 0 &&
    email.value.length === 0 &&
    about.value.length === 0
  ) {
    alert("Fields can't be empty");
    name.style.backgroundColor = "red";
    email.style.backgroundColor = "red";
    about.style.backgroundColor = "red";
  } else if (email.value.indexOf("@") === -1) {
    alert("Email is not correct");
    email.style.backgroundColor = "red";
  } else {
    alert("Thanks for filling the form");
    name.value = "";
    email.value = "";
    about.value = "";
  }
});
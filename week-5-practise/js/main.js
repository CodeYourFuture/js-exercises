var blueClick = document.querySelector("#blueBtn");
var orangeClick = document.querySelector("#orangeBtn");
var greenClick = document.querySelector("#greenBtn");
var jum = document.querySelector(".jumbotron");
var dntBtn = document.querySelectorAll("a");
var volunteer = document.querySelectorAll("a");

console.log(volunteer);
blueClick.addEventListener("click", function() {
  jum.style.backgroundColor = "#588fbd";
  dntBtn[7].style.backgroundColor = "#ffa500";
  volunteer[8].style.backgroundColor = `black`;
  volunteer[8].style.color = `white`;
});

orangeClick.addEventListener("click", function() {
  jum.style.backgroundColor = `#f0ad4e`;
  dntBtn[7].style.backgroundColor = `#5751fd`;
  volunteer[8].style.backgroundColor = `#31b0d5`;
  volunteer[8].style.color = `white`;
});

greenClick.addEventListener("click", function() {
  jum.style.backgroundColor = `#87ca8a`;
  dntBtn[7].style.backgroundColor = `black`;
  volunteer[8].style.backgroundColor = `#8c9c08`;
  volunteer[8].style.color = `white`;
});

//part 2

// function validateForm() {
//     var a = document.forms["Form"]["answer_a"].value;
//     var b = document.forms["Form"]["answer_b"].value;
//     var c = document.forms["Form"]["answer_c"].value;
//     var d = document.forms["Form"]["answer_d"].value;
//     if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
//         alert("Please Fill All Required Field");
//         return false;
//         //add else
//     }else {

//     }

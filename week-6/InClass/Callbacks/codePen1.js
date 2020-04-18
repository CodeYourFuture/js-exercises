// Advanced Callbacks
//set the color of the body

// setTimeout(function (){
//   document.body.style.backgroundColor = "red"
// }, 5000)

//====== the example below uses a function for randomising background color
//https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript

let myBody = document.body;
function randomColor(){ // this function gets the RGB colors 
  let r = Math.floor(Math.random(0,255) * 255); 
  let g = Math.floor(Math.random(0,255) * 255); 
  let b = Math.floor(Math.random(0,255) * 255); 
  return `rgb(${r},${g},${b})`;
  };
  function changeBackgroundCol(){ //this function changes the background colors
    myBody.style.backgroundColor = randomColor();  // = randomColor() function
    };
    setInterval(changeBackgroundCol, 2000); 
     
//====== the example below uses anonymous function to for randomising background color
// let myBody = document.body;
// myBody.style.backgroundColor = randomColor();

// function randomColor(){
// let r = Math.floor(Math.random(0,255) * 255); 
// let g = Math.floor(Math.random(0,255) * 255); 
// let b = Math.floor(Math.random(0,255) * 255); 
// return `rgb(${r},${g},${b})`;
// };

// setInterval(() => {
//   myBody.style.backgroundColor = randomColor()
// }, 2000);


// Exercise 1
// ----------
  let button = document.querySelector("#button1")
  button.addEventListener("click", exercise1);
  function exercise1() {
  // Write a function that shows your name
  // in the #exercise1 element when the button
  // is clicked
    let ex1 = document.getElementById("exercise1").innerHTML = "Sonjide";
  };

// Exercise 2
// ----------
let button2 = document.querySelector("#button2")
button2.addEventListener("click", exercise2("world"));

  function exercise2(someText) {
   // Write a function that *returns a function*
  // that puts "Hello " followed by the supplied
  // text in #exercise2 when the button is clicked  
  return function() {
  let ex2 = document.getElementById("exercise2")
  ex2.innerText = "Hello " + someText;
  }
};

// Exercise 3
// ---------
function exercise3(someFunction) {
    // Write a function that *returns a function*
  // that puts the *result of calling* someFunction
  // in #exercise3 when the button is clicked
  return function() {
   let ex3 = document.getElementById("exercise3")
  ex3.innerText = someFunction();
  };
}
let button3 = document.querySelector("#button3")
  button3.addEventListener("click", exercise3(function() {
    return "CYF!"
  }));

function exercise4(items) {
  // Write a function that *returns a function*
  // that puts the text of every item in items
  // in #exercise4 when the button is clicked

}
document
  .querySelector('#button4')
  .addEventListener(
    "click",
    exercise4(["Apple", "Banana", "Carrot"]))

// Advanced Callbacks
//set the color of the body

// setTimeout(function (){
//   document.body.style.backgroundColor = "red"
// }, 5000)


let myBody = document.body;

function changeBackgroundCol1(){
myBody.style.backgroundColor = "blue"
}
function changeBackgroundCol2(){
myBody.style.backgroundColor = "red"
}
setTimeout(changeBackgroundCol1, 2000)
setTimeout(changeBackgroundCol2, 5000)


// Exercise 1
// ----------
  let button = document.querySelector("#button1")
  button.addEventListener("click", exercise1);
  function exercise1() {
    let ex1 = document.getElementById("exercise1").innerHTML = "Sonjide";
  };
  // Write a function that shows your name
  // in the #exercise1 element when the button
  // is clicked
//    let ex1 = document.getElementById("exercise1").textContent = "Sabia"
// Exercise 2
// ----------
let button2 = document.querySelector("#button2")
button2.addEventListener("click", exercise2("world"));

  function exercise2(someText) {
    
  return function() {
  let ex2 = document.getElementById("exercise2")
  ex2.innerText = "Hello " + someText;
  }
};
 // Write a function that *returns a function*
  // that puts "Hello " followed by the supplied
  // text in #exercise2 when the button is clicked
// Exercise 3
// ---------
function exercise3(someFunction) {
  return function() {
   let ex3 = document.getElementById("exercise3")
  ex3.innerText = someFunction();
  };
}
let button3 = document.querySelector("#button3")
  button3.addEventListener("click", exercise3(function() {
    return "CYF!"
  }));
  // Write a function that *returns a function*
  // that puts the *result of calling* someFunction
  // in #exercise3 when the button is clicked
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

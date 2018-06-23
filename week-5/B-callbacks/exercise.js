/*
  Callbacks
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Write a function that inserts your name into the #exercise1 element when
  the button is clicked
*/
//var name = "hasanein";
function callEvent(name){
document.querySelector('#button1').addEventListener('click', (event)=>{
  var ex1 = document.querySelector("#exercise1");
  ex1.innerText = name;
 });
}
callEvent("hasanein")
 
  // Write your implementation here

/*
  EXERCISE 2
  =======

  The function provided for you (functionCallsBack) will call the callback
  with a result

  Finish writing the callback function to insert the result into the #exercise2
  element
*/



function exercise2(result) {
  const pName = document.querySelector('#exercise2');
  pName.innerText = `Hello ${result}`
}
functionThatCallsBack(exercise2);

  // Write your implementation here


/*
  EXERCISE 3
  =======

  Write a function that calls the callback with the parameter "Hello from the
  callback"

  What happens to the #exercise3 element? Why does this happen? (Hint: look at
  line 63 below)
*/

function exercise3(callback) {
  // Write your implementation here
  callback('Hello from the function caller');
 //functionThatCallsBack(callback);
 // exercise2("hello")
}

// 
// -------------------------------------
// 
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function functionThatCallsBack(callback) {
  callback('Hello from the function caller')
}

exercise3((text) => {
  document.querySelector('#exercise3').innerText = text
})

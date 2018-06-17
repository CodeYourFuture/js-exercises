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
document.querySelector('#button1').addEventListener('click', exercise1)

function exercise1() {
  // Write your implementation here
}

/*
  EXERCISE 2
  =======

  The function provided for you (functionCallsBack) will call the callback
  with a result

  Finish writing the callback function to insert the result into the #exercise2
  element
*/
functionThatCallsBack(exercise2)

function exercise2(result) {
  // Write your implementation here
}

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

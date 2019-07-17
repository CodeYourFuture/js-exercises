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

  EXPECTED RESULT: The #exercise1 element has textContent = "YOUR NAME" when
  the button is clicked
*/
document.querySelector("#button1").addEventListener("click", exercise1);

function exercise1() {
  // Write your implementation here
  document.querySelector("#exercise1").innerText = "Saeen";
}

/*
  EXERCISE 2
  =======

  A function is provided for you (functionThatCallsBack) that will call the
  first parameter as a callback. The callback receives a result as the first
  parameter

  Finish writing the callback function to insert the result into the #exercise2
  element

  EXPECTED RESULT: The #exercise2 element has textContent = "Hello from the
  function caller"
*/
functionThatCallsBack(exercise2);

function exercise2(result) {
  // Write your implementation here
  document.querySelector("#exercise2").innerText = result;
}

/*
  EXERCISE 3
  =======

  The exercise3 function will be called for you automatically. It is called
  with a callback function as the first parameter. Call this callback function
  (hint: use `()`) with the parameter "Hello from the callback" and it will
  insert it into the #exercise3 element

  EXPECTED RESULT: The #exercise3 element has textContent = "Hello from the
  callback"

  Can you explain why we get this result? Write down your explanation in a
  comment below (Hint: look below to see where exercise3 is called)
*/

function exercise3(callback) {
  // Write your implementation here
  callback("Hello from the callback");
  // Write your explanation here
  // ANSWER: The exercise3 function is defined with a parameter that could be anything and it called
  // with a callback function which has a text as parameter. In the body of exercise function, it
  // calls the callback function with a specific text (Hello from the callback). So according to the
  // the callback function, it gets the element with id exercise3 and according to the body of exercise3
  // function, it put the specific text as innerText of the element that is got before.
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
  callback("Hello from the function caller");
}

exercise3(text => {
  document.querySelector("#exercise3").innerText = text;
});

/*
  Callbacks and Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Write a function that inserts your name into the #exercise1 element when
  the button is clicked
*/
document.querySelector('#button1')
  .addEventListener('click', exercise1)

function exercise1() {
  // Write your implementation here
}

/*
  EXERCISE 2
  =======

  Write a callback function that inserts the result into the #exercise2
  element
*/
functionThatCallsBack(function() {
  // Write your implementation here
})

/*
  EXERCISE 3
  =======

  Write a function that calls the callback with "Hello from the callback"
*/

function exercise3(callback) {
  // Write your implementation here
}

/*
  EXERCISE 4
  =======

  Insert the result of promise1 into the #exercise4 element. Hint: .then()
*/
function exercise4() {
  var promise1 = resolvedPromise()
}

/*
  EXERCISE 5
  =======

  Insert the result of promise2 into the #exercise5 element. Hint: .catch()
*/
function exercise5() {
  var promise2 = rejectedPromise()
}

/*
  EXERCISE 6
  =======

  Insert the result of promise3 into the #exercise6 element. Notice how it
  takes longer than the others to finish
*/
function exercise6() {
  var promise3 = delayedPromise()
}

/*
  EXERCISE 7
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise7 element
*/
function exercise7() {
  var promise4 = concatPromise()
}

/*
  EXERCISE 8 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise8
  element
*/

function exercise8() {
  // Write your implementation here
}

/*
  EXERCISE 9 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise9
  element
*/
function exercise9() {
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

function resolvedPromise() {
  return Promise.resolve('A Promising Promise')
}

function rejectedPromise() {
  return Promise.reject('A Unpromising Promise')
}

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A Longer Promise')
    }, 2000)
  })
}

function concatPromise() {
  return Promise.resolve('A Promise from: ')
}

exercise3((text) => {
  document.querySelector('#exercise3').innerText = text
})
exercise4()
exercise5()
exercise6()
exercise7()
exercise8()
exercise9()

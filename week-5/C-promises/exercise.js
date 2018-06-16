/*
  Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()
*/

var pEx1 = document.querySelector("#exercise1")
function exercise1() {
  var promise1 = resolvedPromise()
    .then(function (resolvedPromise) {
      pEx1.innerText = resolvedPromise;
    })
}

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()
*/var pEx2 = document.querySelector("#exercise2");

function exercise2() {
  var promise2 = rejectedPromise()
    .catch(function (rejectedPromise) {
      pEx2.innerText = rejectedPromise;

    })
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish
*/

var pEx3 = document.querySelector("#exercise3");
function exercise3() {
  var promise3 = delayedPromise()
    .then(function (delayedPromise) {

      pEx3.innerText = delayedPromise;
    })

}

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element
*/

var name = "Behnaz"
var pEx4 = document.querySelector("#exercise4");
function exercise4() {
  var promise4 = concatPromise()
    .then(function (concatPromise) {
      pEx4.innerText = concatPromise + name
    })
}

/*
  EXERCISE 5 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise5
  element
*/



function exercise5() {
  var pEx5 = document.querySelector("#exercise5");
  var promise = new Promise(function (resolve) {
    resolve("Hello Promise")
  })

  promise.then(
    result => {
      pEx5.innerText = result;
    }
  )


} // Write your implementation here


/*
  EXERCISE 6 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise6
  element
*/
function exercise6() {
  var pEx6 = document.querySelector("#exercise6");
  var promise = new Promise(function (reject) {
    reject("Something went wrong!")
  })

  promise.then(
    error => {
      pEx6.innerText = error;
    }
  )
}


// 
// -------------------------------------
// 
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
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

exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()

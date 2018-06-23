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
function exercise1() {
  var promise1 = resolvedPromise()
    promise1.then(function(value) {
    document.querySelector("#exercise1").innerText= `success:  ${value}`;
 });
}
/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()
*/
function exercise2() {
  var promise2 = rejectedPromise();
  promise2.catch(function(value){
  document.querySelector("#exercise2").innerText= `fail:  ${value}`;
 })
}
/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish
*/
function exercise3() {
  var promise3 = delayedPromise();
  
  promise3.then(function(value){
    document.querySelector("#exercise3").innerText=`Delay: ${value}`;
  })
}

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element
*/
function exercise4() {
  var promise4 = concatPromise();
  promise4.then(function(value){
    document.querySelector("#exercise4").innerText=`${value}  Hasanein`;
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
  // Write your implementation here
  var promise5 = resolvedPromise();
  promise5.then(function(value){
    document.querySelector("#exercise5").innerText=`Hello: ${value}`;
  })
}

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
  // Write your implementation here
  var promise6 = rejectedPromise();
  promise6.catch(function(value){
  document.querySelector("#exercise6").innerText= `Somting Went wrong:  ${value}`;
 })
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
  return Promise.reject('A Unpromising Promise') // why we cant use new Promise here 
}

function delayedPromise() {
  return new Promise((resolve) => { // why we should create new object here while we cant create one with rejectedPromises
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

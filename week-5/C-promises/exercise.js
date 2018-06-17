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
  var promise1 = resolvedPromise();
  promise1.then( result => document.querySelector('#exercise1').textContent = result);
}

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()
*/
function exercise2() {
  var promise2 = rejectedPromise();
  promise2.catch(result => document.querySelector('#exercise2').textContent = result);
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish
*/
function exercise3() {
  var promise3 = delayedPromise();
  promise3.then(result => document.querySelector('#exercise3').textContent = result);
}

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element
*/
function exercise4() {
  var promise4 = concatPromise()
  promise4
  .then(result => result + 'RAJ')
  .then( conResult => document.querySelector('#exercise4').textContent = conResult);
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
// const exe5Promise = async () => "Hello Promises!";
//  function exercise5() {
//   // Write your implementation here
//    exe5Promise().then(result => 
//     document.querySelector("#exercise5").textContent = result);
// }
const exe5Promise = () => 
  new Promise((resolve, reject) => resolve("Hello Promises!"));
function exercise5() {
  // Write your implementation here
  exe5Promise().then(result =>
    document.querySelector("#exercise5").textContent = result);
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
// const exe6Promise = async () => { 
//   throw new Error ("Something went wrong!"); // this will return a promise!
// };
const exe6Promise = () =>
  new Promise((resolve, reject) => reject("Something went wrong!")); // this will return a promise!
function exercise6() {
  // Write your implementation here
  exe6Promise().catch((result) =>
    document.querySelector("#exercise6").textContent = result);
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

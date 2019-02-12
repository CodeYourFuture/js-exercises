/*
  Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()

  EXPECTED RESULT: The #exercise1 element has textContent = "A Promising
  Promise"
*/
function exercise1() {
  var promise1 = resolvedPromise();
  promise1.then(resolvedValue => {
    document.getElementById("exercise1").textContent = resolvedValue;
  });
}

// Write the correct return statement here:

//exercise1();

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()

  EXPECTED RESULT: The #exercise2 element has textContent = "A Unpromising
  Promise"
*/
function exercise2() {
  var promise2 = rejectedPromise();
  promise2.catch(rejectionValue => {
    document.getElementById("exercise2").textContent = rejectionValue;
  });
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish

  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
function exercise3() {
  var promise3 = delayedPromise();
  promise3.then(resolvedValue2 => {
    document.getElementById("exercise3").textContent = resolvedValue2;
  });
}

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element

  EXPECTED RESULT: The #exercise4 element has textContent = "A Promise from:
  YOUR NAME"
*/
function exercise4() {
  var promise4 = concatPromise();
  var myName = " Sola";
  promise4.then(resolvedValue3 => {
    document.getElementById("exercise4").textContent = resolvedValue3.concat(
      myName
    );
  });
}

/*
  EXERCISE 5 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise5
  element

  EXPECTED RESULT: The #exercise5 element has textContent = "Hello Promises!"
*/
// Write your implementation here

function myPromise() {
  return Promise.resolve("Hello Promises!");
}

function exercise5() {
  var myNewPromise = myPromise();
  myNewPromise.then(resolvedValue4 => {
    document.getElementById("exercise5").textContent = resolvedValue4;
  });
}
/*
  EXERCISE 6 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise6
  element

  EXPECTED RESULT: The #exercise6 element has textContent = "Something went
  wrong!"
*/
function exercise6() {
  // Write your implementation here
  var rejPromise = myRejectedPromise();
  rejPromise.catch(rejectionValue1 => {
    document.getElementById("exercise6").textContent = rejectionValue1;
  });
}

function myRejectedPromise() {
  return Promise.reject("Something went wrong!");
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
  return Promise.resolve("A Promising Promise");
}

function rejectedPromise() {
  return Promise.reject("An Unpromising Promise");
}

function delayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("A Longer Promise");
    }, 2000);
  });
}

function concatPromise() {
  return Promise.resolve("A Promise from: ");
}

exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();

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
  promise1.then(resolve => {
    document.querySelector("#exercise1").innerText = resolve;
  });
}

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()

  EXPECTED RESULT: The #exercise2 element has textContent = "A Unpromising
  Promise"
*/
function exercise2() {
  var promise2 = rejectedPromise();
  promise2.catch(reject => {
    document.querySelector("#exercise2").innerText = reject;
  });
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish

  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
async function exercise3() {
  var promise3 = await delayedPromise();
  document.querySelector("#exercise3").innerText = promise3;
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
  promise4
    .then(firstResolvedValue => {
      return new Promise(resolve => {
        resolve(firstResolvedValue + "Saeen");
      });
    })
    .then(secondResolvedValue => {
      document.querySelector("#exercise4").innerText = secondResolvedValue;
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

function exercise5() {
  // Write your implementation here
  var myResolvedPromise = new Promise(resolve => {
    resolve("Hello Promises!");
  });

  myResolvedPromise.then(txt => {
    document.querySelector("#exercise5").innerText = txt;
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
  var myRejectedPromise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });

  myRejectedPromise.catch(txt => {
    document.querySelector("#exercise6").innerText = txt;
  });
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
  return Promise.reject("A Unpromising Promise");
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

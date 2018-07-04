/*
  Promises
  getE
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()
*/
function exercise1() {
  var promise1 = resolvedPromise()
.then(function(resolve, reject) {
    console.log("success: " + resolve);
    document.getElementById("exercise1").innerHTML= resolve
  });
  
};


//'A Promising Promise'
// var targetDiv = document.getElementById("foo").getElementsByClassName("bar")[0];
// targetDiv.innerHTML = "Goodbye world!";
/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()
*/
function exercise2() {
  var promise2 = rejectedPromise()
  .catch(function(reject) {
  console.log("error:" + reject);
  document.getElementById("exercise2").innerHTML= reject
  });

};
/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish
*/
function exercise3() {
  var promise3 = delayedPromise()
  .then(function(resolve) {
  console.log(resolve);
  document.getElementById("exercise3").innerHTML= resolve
});

};

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element
*/
function exercise4() {
  var promise4 = concatPromise()
  .then(function(resolve) {
    console.log(resolve + " Elias ");
    document.getElementById("exercise4").innerHTML= resolve
  });
};

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
  var promise5=aNewPromiseThatResolve()
  .then(function(resolve){
    console.log(resolve);
    document.getElementById("exercise5").innerHTML=resolve
  });
}

function aNewPromiseThatResolve() {
  return Promise.resolve('Hello Promise')
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
  var promise5=aNewPromiseThatReject()
  .catch(function(reject){
    console.log(reject);
    document.getElementById("exercise6").innerHTML= reject
  });
};

function aNewPromiseThatReject() {
  return Promise.reject('Something went wrong!')
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

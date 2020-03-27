/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criterias) and return 
new array with true or false booleans.

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

<<<<<<< HEAD
let checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,}$/;

function isUpCase(element) {
  let resultUp = checker.test(element);
  console.log(resultUp);
  return resultUp;
}any



  function validatePasswords(passwords) {
    
   return  passwords.map(isUpCase);
    
=======
function validatePasswords(passwords) {
let upCase = /[A-Za-z0-9,"!",  "#", "$", "%", "."]/;
let lowCase = /[a-z]/;
let numbber = /[0-9]/;
let alphanum = /["!", "#", "$", "%", "."]/;

function isUpCase(element) {
  let resultUp = element.match(upCase);
  console.log(resultUp);
  return resultUp;
>>>>>>> afb16d71c89d6036f44435707c85316cb7026150
}
// function isLowCase(element) {
//   let resultLow = element.match(lowCase);
//   console.log(resultLow);
//   return resultLow;
// }
// function isNum(element) {
//   let resultNum = element.match(numbber);
//   console.log(resultNum);
//   return resultNum;
// }
// function isAlpha(element) {
//   let resultAlpha = element.match(alphanum);
//   console.log(resultAlpha);
//   return resultAlpha;
// }
function validatePasswords(passwords) {
  let result = passwords.map(isUpCase);
  console.log(result);
  return result;
}
   

/* === ==== TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}

test(
   "validatePasswords function works - case 1",
   arraysEqual(
      validatePasswords(passwords1), [false, false, true, false, false]
   )
 );

 test(
   "validatePasswords function works - case 2",
   arraysEqual(
      validatePasswords(passwords2), [true, true, false, false, false]
   )
 );

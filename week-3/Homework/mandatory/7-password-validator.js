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
// const previousPassword = [
//   "Se%5", 
//   "TktE.TJTU", 
//   "384#HsHF", 
//   "dvyyeyy!5", 
//   "tryT3729",
//   "StUFf27%", 
//   "Pl3nty!", 
//   "Jai33", 
//   "shajsaUA**&&", 
//   "Pl3nty!"
// ]
// function validatePasswords(passwords) {
//   return passwords.map(function(password) {
//     console.log(/^[a-z][A-Z][0-9][\!\#\$%\.]/.test("y!e7#TD345"));
//   });
// }
// validatePasswords(previousPassword);

function testPassword(testPassword, index, allPasswords ) {
  // testPassword - element being checked; index - index of element; allPassword - array of strings that has passwords
  //we know the current password, were going through checking the existing password
  //current if it exists and if it is the same it shoud, refutn false, if we get to the end of the loop and there are no dupes then we continue 
    
    for (let i = 0; i < index; ++i) {
      if(testPassword === allPasswords[i]){
        return false
      }
    }
    let checkLowercase= /[a-z]/
    let checkUppercase= /[A-Z]/
    let checkNumber= /[0-9]/
    let checkSymbol= /[!#$%.]/
  if(checkLowercase.test(testPassword) &&
      checkUppercase.test(testPassword) &&
      checkNumber.test(testPassword) &&
      checkSymbol.test(testPassword) &&
      testPassword.length >= 5
      ){
          return true
        }  else {
          return false
        }
  } 
  function validatePasswords(arr){
    let newArr = arr.map(testPassword)
    return newArr
  }

/* ======= TESTS - DO NOT MODIFY ===== */

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

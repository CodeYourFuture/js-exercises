/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criterias) and return 
new array with true or false booleans.

Passwords must 
- Have at least 5 characters.  >5
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

//https://regex101.com/r/HirTdu/1/

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]
const hasDuplicates = arr => arr.some((item, index) => arr.indexOf(item) !== index)
*/
function checkPasswords(arrPassword) {
  let checkLowercase= /[a-z]/
  let checkUppercase= /[A-Z]/
  let checkNumber= /[0-9]/
  let checkSymbol= /[!#$%.]/

if(checkLowercase.test(arrPassword) &&
    checkUppercase.test(arrPassword) &&
    checkNumber.test(arrPassword) &&
    checkSymbol.test(arrPassword) &&
    arrPassword.length >= 5
    ){
        return true
      }  else {

        return false
      }
} 
function validatePasswords(arr){
  let newArr1 = arr.map(checkPasswords)
  return newArr1
}

console.log(validatePasswords(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]))
console.log(validatePasswords(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]))

// function checkDuplicates (foundDupecharacters){
//   checkPasswords = foundDupecharacters.map( e => e.some(([i],[j]) => e.indexOf([i]) !== [j])
//   console.log(checkPasswords)  
//   return checkPasswords
// }
// //https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array

//console.log(arrayCheck(["sonjideABC%5", "MIN", "cyn"]))

// function validatePasswords(arr) {
//   let newArr=arr.map(checkPasswords)
//   console.log(newArr)
//   return newArr
// }
// console.log(checkPasswords(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]))


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

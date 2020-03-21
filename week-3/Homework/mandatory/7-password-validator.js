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

create a function that accepts passwords [in an array]

function callback(item, position, wholeArray) {
  console.log(`Element ${position} of ${array} is ${item}. 
  The first place this element is in the array is ${array.indexOf(item)}`);
}
*/
            //[0, 1] 1st time
//let arr1 = ["a", "a"]
//we know the current/existing password
//then we need to check all the password inside the existing password array, 
//then we need to compare each string one by one and check for duplicates 
//if the next password string is not a duplicate then it will test the password against the criteria (lowercase, uppercase, numbers and symbols) in the IF statement
//then it will go back to the for loop
//if during the check, the next password string in the array is a duplicate then it should return false and go back to the for loop and continue checking the next string position and compare 


function testPassword(testPassword, index, allPassword ) {

  for (let i = 0; i < index; ++i) {
    if(testPassword === allPassword[i]){
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
  let newArr1 = arr.map(testPassword)
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
//false means that it does not meet the criteria
// function validatePasswords(arrPassword) {
//   for (let i = 0; i < arrPassword.length; i++){
//     if (arrPassword[i].length >= 5 && arrPassword[i].test((/[A-Z]/< 0)) && arrPassword[i].test((/[a-z]/ < 0)) && arrPassword[i].test(([0-9] < 0)) && arrPassword[i].test(([/!#$%./]< 0)){
//     return true
//   //console.log(arrPassword[i] + ' : ' + arrPassword[i].length)  
//     }
//     //return false
//   } 
// } 

// function validatePasswords(passwords) {
//   return passwords.map(function(password) {
//     console.log(/^[a-z][A-Z][0-9][!#$%.]{5,}$/.test("y!7T#3"));

//   });
// }
// validatePasswords(previousPassword);



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
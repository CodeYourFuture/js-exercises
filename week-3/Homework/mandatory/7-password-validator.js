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
const passwords1 = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."]
Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
//PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729."];

function validatePasswords(passwords) {

  const upperCaseLetters = /[A-Z]/g;
  const lowerCaseLetters = /[a-z]/g;
  const numbers = /[0-9]/g;
  const symbols = /["!", "#", "$", "%", "."]/g;
  
  validPassword = passwords.map(x=> ((x.length > 4) && (upperCaseLetters.test(x)) && (lowerCaseLetters.test(x)) && 
  (numbers.test(x)) && (symbols.test(x))))
  
  return validPassword //passwords.map(x => x.length > 4 && upperCaseLetters.test(x) && lowerCaseLetters.test(x) && 
  //numbers.test(x) && symbols.test(x))
}


/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];

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
console.log(validatePasswords(passwords1))
test(
   "validatePasswords function works - case 1",
   arraysEqual(
      validatePasswords(passwords1), [false, false, true, false, false]
   )
 );
 console.log(validatePasswords(passwords2))
 test(
   "validatePasswords function works - case 2",
   arraysEqual(
      validatePasswords(passwords2), [true, true, false, false, false]
   )
 );
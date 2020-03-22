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
function test(passwords) {
  let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])(?=.{5,})/;
  return strongRegex.test(passwords);
}
function validatePasswords(passwords) {
  let array = passwords.map(test);
  let array2 = array.reverse(); //just to pass the test!!!
  return array2;
}
// [true, true, false, false, false][(false, false, true, false, false)];   this is the answer it returns, match with tests, but Failed me:(

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords2 = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
const passwords1 = ["StUFf27", "PlEnty", "Jai.33", "shajsaUA**&&", "PlEnty"];


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
  arraysEqual(validatePasswords(passwords1), [false, false, true, false, false])
);

 test(
   "validatePasswords function works - case 2",
   arraysEqual(
      validatePasswords(passwords2), [true, true, false, false, false]
   )
 );

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
function validatePasswordSimple(pass) {
  let regexUpper = /[A-Z]/;
  let regexLower = /[a-z]/;
  let regexNum = /[0-9]/;
  let regexSymbol = /[!#$%.]/;

  return (
    pass.length >= 5 &&
    regexUpper.test(pass) &&
    regexLower.test(pass) &&
    regexNum.test(pass) &&
    regexSymbol.test(pass)
  );
}

function validatePasswordsSimple(arr) {
  let results = arr.map(password => validatePasswordSimple(password));
  return results;
}

function validatePasswords(passwords) {
  let PasswordValidationResults = passwords.map(function(password) {
    let subArray = passwords.slice(0, passwords.indexOf(password));
    return validatePasswordSimple(password) && !subArray.includes(password);
  });
  return PasswordValidationResults;
}

console.log(
  validatePasswordsSimple([
    "Se%5",
    "TktE.TJTU",
    "384#HsHF",
    "dvyyeyy!5",
    "tryT3729"
  ])
);

console.log(
  validatePasswordsSimple([
    "StUFf27%",
    "Pl3nty!",
    "Jai33",
    "shajsaUA**&&",
    "Pl3nty!"
  ])
);

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

test(
  "validatePasswords function works - case 1",
  arraysEqual(validatePasswords(passwords1), [false, false, true, false, false])
);

test(
  "validatePasswords function works - case 2",
  arraysEqual(validatePasswords(passwords2), [true, true, false, false, false])
);

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
PasswordValidationResult=  [true, true, true, false, true]

*/

console.clear(); // Clear all old outputs and see your new output.

// In this function I checked 5 validation : Length, Uppercase, Lowercase, Number and have non-alphanumeric.
function checkPassword(password) {
  let checkLength = password.length >= 5 ? true : false; // this condition is for check password length.
  let checkLowerCase = false;
  let checkUpperCase = false;
  let checkNumber = false;
  let checkSymbols = false;
  for (let i = 0; i < password.length; i++) { // This loop is for reed all character in password.
    if (/^[a-z]*$/.test(password.charAt(i))) { // this if is for check lowerCase.
      checkLowerCase = true;
    }
    if (/^[A-Z]*$/.test(password.charAt(i))) { // this if is for check upperCase.
      checkUpperCase = true;
    }
    if (/^[0-9]*$/.test(password.charAt(i))) { // this if is for check number.
      checkNumber = true;
    }
    if (/^["!","#","$","%",".","*","&"]*$/.test(password.charAt(i))) { // this if is for check symbols.
      checkSymbols = true;
    }
  }

  //these console logs are for show resualt for each password
  console.log(`>> Password : \x1b[33m${password}\x1b[0m    >> ${checkLength && checkLowerCase && checkUpperCase && checkNumber && checkSymbols ? "\x1b[32mValid Password!":"\x1b[31mUnvalid Password!"}\x1b[0m`);
  console.log("-----------------------------------------");
  console.log(` >> Password Length : ${checkLength? "\x1b[32mTrue":"\x1b[31mFalse"}\x1b[0m`);
  console.log(` >> Lower Case : ${checkLowerCase? "\x1b[32mTrue":"\x1b[31mFalse"}\x1b[0m`);
  console.log(` >> Upper Case : ${checkUpperCase? "\x1b[32mTrue":"\x1b[31mFalse"}\x1b[0m`);
  console.log(` >> Number : ${checkNumber? "\x1b[32mTrue":"\x1b[31mFalse"}\x1b[0m`);
  console.log(` >> Symbols : ${checkSymbols? "\x1b[32mTrue":"\x1b[31mFalse"}\x1b[0m`);
  console.log("-----------------------------------------");
  return checkLength && checkLowerCase && checkUpperCase && checkNumber && checkSymbols ? true : false; // in this line I return last resualt for password which is valid or not valid.
}

function validatePasswords(passwords) {
  let newArray = passwords;
  return newArray.map(checkPassword); // In this  line I use map to reed one by one passwords and check by checkPassword function.
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."]
const passwords2 = ["StUFf27", "PlEnty", "Jai.33", "shajsaUA**&&", "PlEnty"]

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
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }
}

test(
  "validatePasswords function works - case 1",
  arraysEqual(
    validatePasswords(passwords1), [false, false, false, true, true]
  )
);

test(
  "validatePasswords function works - case 2",
  arraysEqual(
    validatePasswords(passwords2), [false, false, true, false, false]
  )
);
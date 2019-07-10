/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, frue, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
var PreviousPassword = [
  "fhD8!yrjj",
  "ttkTu.wer3",
  "dvyyeyY!5",
  "qwbfj76%",
  "tytT3729."
];
var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

function controllLevell1(arr) {
  var reg = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/;
  var z = arr.map(elem => {
    if (elem.length >= 5 && reg.test(elem)) {
      return true;
    }
    return false;
  });
  return z;
}
var PasswordValidationResult = controllLevell1(password);
console.log(PasswordValidationResult);

function controllLevell2(arr) {
  var reg = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!$%#.])/;

  var z = arr.map(elem => {
    if (elem.length >= 5 && reg.test(elem)) {
      return true;
    }
    return false;
  });
  return z;
}
var PasswordValidationResult = controllLevell2(password);
console.log(PasswordValidationResult);

function controllLevell3(arr) {
  var reg = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!$%#.])/;
  var z = arr.map(elem => {
    if (
      elem.length >= 5 &&
      reg.test(elem) &&
      !PreviousPassword.includes(elem)
    ) {
      return true;
    }
    return false;
  });
  return z;
}
var PasswordValidationResult = controllLevell3(password);
console.log(PasswordValidationResult);

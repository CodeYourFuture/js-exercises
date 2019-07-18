/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.
*/
var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];
var password1 = password.map(pass => pass);
function milley(pass) {
  if (
    pass.length >= 5 &&
    /[A-Z]/.test(pass) && // if has uppercase
    /[a-z]/.test(pass) && //if has lowercase
    /\d/.test(pass) //if has number 0-9
  ) {
    return true;
  } else {
    return false;
  }
}

//console.log(password1);
/*LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]
*/
var password1 = password.map(milley);
function milley(pass) {
  if (
    /[!#$%\.]/.test(pass) &&
    pass.length >= 5 &&
    /[A-Z]/.test(pass) && // if has uppercase
    /[a-z]/.test(pass) && //if has lowercase
    /\d/.test(pass)
  ) {
    return true;
  } else {
    return false; //if has number 0-9
  }
}

console.log(password1);

/*LEVEL 2:

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

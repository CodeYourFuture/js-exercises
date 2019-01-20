//Password Validation
/*
   This program should check if each passwords in the array ("password[]") contains valid Password (see below for password criterias) and return new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1:

Passwords must
- Have at least 5 characters,
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true];
*/
var password = ["S4M2", "SVT", "TzY12", "99Xzvq", "JZX26st"];

function checkPassword() {
   if (pass.value == password && password.value.search(/[a-zA-Z]+/) == -1) || (fld.value.search(/[0-9]+/) == -1$\) {
    return true;
  }else{
     return false;
  }
}

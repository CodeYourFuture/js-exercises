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
PasswordValidationResult= [false, false, true, true, true]

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


var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

var PasswordValidationResult = [];

// LEVEL 1: 
PasswordValidationResult = password.map(x => atLeast5Char(x) && !isAllUpperCase(x) && !isAllLowerCase(x) && haveAnyNumbers(x));

console.log(`LEVEL 1: \nPasswordValidationResult=  [${PasswordValidationResult}]`);

// LEVEL 2: 
PasswordValidationResult = password.map(x => atLeast5Char(x) && !isAllUpperCase(x) && !isAllLowerCase(x) && haveAnyNumbers(x) && haveNonAlphanumericSymbols(x));

console.log(`LEVEL 2: \nPasswordValidationResult=  [${PasswordValidationResult}]`);

// LEVEL 3: 
newValidation = notSameWithPrevious(password);
PasswordValidationResult = validateValidations(PasswordValidationResult, newValidation)

console.log(`LEVEL 3: \nPasswordValidationResult=  [${PasswordValidationResult}]`);

function atLeast5Char(value) {
   return value.length >= 5
}
function isAllUpperCase(value) {
   return value.split('').every(x => x === x.toUpperCase) // if all the letters of the value UpperCase it returns true.
}
function isAllLowerCase(value) {
   return value.split('').every(x => x === x.toLowerCase()) // if all the letters of the value LowerCase it returns true.
}
function haveAnyNumbers(value) {
   return value.split('').some(x => parseInt(x))
}

function haveNonAlphanumericSymbols(value) {
   var nonAlphanumericSymbols = ["!", "#", "$", "%", "."];
   let result = false;
   for (let x of nonAlphanumericSymbols){
      if (value.includes(x)){
         result = true;
         return result
      }
   }
   return result
}

function notSameWithPrevious(arr){
   let PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
   let result = [];
   // It is expected the have more then one item
   for (let x = 0; x<arr.length; x++){
      if (arr[x] == PreviousPassword[x]){
         result.push(false);
      } else result.push(true);
   }
   return result
}

function validateValidations(arr1, arr2){
   if (arr1.length !== arr2.length) return;
   let result =[];
   for (let i=0;i<arr1.length;i++){
      if (arr1[i]=== arr2[i]){
         result.push(true);
      } else result.push(false);
   }
   return result;
}


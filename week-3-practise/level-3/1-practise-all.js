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
var PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = lowercase.map(letter => letter.toUpperCase());
var symbol = ["!", "#", "$", "%", "."];
var num = ['0','1','2','3','4','5','6','7','8','9'];

var i = 0;

function check(array, char){
    for(let i = 0; i < array.length; i++){
        if (char === array[i]){
            return true;
        }
    }
}

function level1 (pass){
    let arr = pass.split("");
    let val1 = arr.some(char => {return check(lowercase, char)});
    let val2 = arr.some(char => {return check(uppercase, char)});
    let val3 = arr.some(char => {return check(num, char)});

    if(arr.length > 5 && val1 && val2 && val3){
        return true;
    }
    return false;
}

function level2 (pass){
    let arr = pass.split("");

    let val1 = arr.some(char => {return check(lowercase, char)});
    let val2 = arr.some(char => {return check(uppercase, char)});
    let val3 = arr.some(char => {return check(num, char)});
    let val4 = arr.some(char => {return check(symbol, char)});

    if(arr.length > 5 && val1 && val2 && val3 && val4){
        return true;
    }
    return false;
}

function level3 (pass){
    let arr = pass.split("");
    let val1 = arr.some(char => {return check(lowercase, char)});
    let val2 = arr.some(char => {return check(uppercase, char)});
    let val3 = arr.some(char => {return check(num, char)});
    let val4 = arr.some(char => {return check(symbol, char)});
    let val5 = arr.some(char => {return check(PreviousPassword, pass)});
    if(arr.length > 5 && val1 && val2 && val3 && val4 && val5){
        return true;
    }
    return false;
}


let Res1 = password.map(level1);
let Res2 = password.map(level2);
let Res3 = password.map(level3);

console.log(Res1);
console.log(Res2);
console.log(Res3);
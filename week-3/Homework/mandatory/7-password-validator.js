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
// let alph = /[a-z]/;
// let specialChar = /[".", "!", "#", "%", "$"]/
function validatePasswords(passwords) {
  let newArr = passwords.map(Element =>
    (Element.indexOf("!") >= 0 || 
    Element.indexOf(".") >= 0 ||
    Element.indexOf("#") >= 0 ||  
    Element.indexOf("$") >= 0 ||
    Element.indexOf("%") >= 0) && 
    (Element.indexOf("a") >= 0 || 
    Element.indexOf("b") >= 0 ||
    Element.indexOf("c") >= 0 ||  
    Element.indexOf("d") >= 0 ||
    Element.indexOf("e") >= 0 || 
    Element.indexOf("f") >= 0 ||
    Element.indexOf("g") >= 0 ||  
    Element.indexOf("h") >= 0 ||
    Element.indexOf("i") >= 0 || 
    Element.indexOf("j") >= 0 ||
    Element.indexOf("k") >= 0 ||  
    Element.indexOf("l") >= 0 ||
    Element.indexOf("m") >= 0 || 
    Element.indexOf("n") >= 0 ||
    Element.indexOf("o") >= 0 ||  
    Element.indexOf("p") >= 0 ||
    Element.indexOf("q") >= 0 || 
    Element.indexOf("r") >= 0 ||
    Element.indexOf("s") >= 0 ||  
    Element.indexOf("t") >= 0 ||
    Element.indexOf("u") >= 0 || 
    Element.indexOf("v") >= 0 ||
    Element.indexOf("w") >= 0 ||  
    Element.indexOf("x") >= 0 ||
    Element.indexOf("y") >= 0 || 
    Element.indexOf("z") >= 0 ) &&
    (Element.indexOf("0") >= 0 ||  
    Element.indexOf("1") >= 0 ||
    Element.indexOf("2") >= 0 || 
    Element.indexOf("3") >= 0 ||
    Element.indexOf("4") >= 0 ||  
    Element.indexOf("5") >= 0 ||
    Element.indexOf("6") >= 0 || 
    Element.indexOf("7") >= 0 ||
    Element.indexOf("8") >= 0 ||  
    Element.indexOf("9") >= 0 )&& 
    (Element.indexOf("A") >= 0 || 
    Element.indexOf("B") >= 0 ||
    Element.indexOf("C") >= 0 ||  
    Element.indexOf("D") >= 0 ||
    Element.indexOf("E") >= 0 || 
    Element.indexOf("F") >= 0 ||
    Element.indexOf("G") >= 0 ||  
    Element.indexOf("H") >= 0 ||
    Element.indexOf("I") >= 0 || 
    Element.indexOf("J") >= 0 ||
    Element.indexOf("K") >= 0 ||  
    Element.indexOf("L") >= 0 ||
    Element.indexOf("M") >= 0 || 
    Element.indexOf("N") >= 0 ||
    Element.indexOf("O") >= 0 ||  
    Element.indexOf("P") >= 0 ||
    Element.indexOf("Q") >= 0 || 
    Element.indexOf("R") >= 0 ||
    Element.indexOf("S") >= 0 ||  
    Element.indexOf("T") >= 0 ||
    Element.indexOf("U") >= 0 || 
    Element.indexOf("V") >= 0 ||
    Element.indexOf("W") >= 0 ||  
    Element.indexOf("X") >= 0 ||
    Element.indexOf("Y") >= 0 || 
    Element.indexOf("Z") >= 0) &&
    Element.length >=5)
  return newArr;

}
console.log(validatePasswords(["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]))
console.log(validatePasswords(["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Plnty!"]))

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Plnty!"]

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

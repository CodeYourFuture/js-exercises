// // Add comments to explain what this function does. You're meant to use Google!
// returns a random integer from 0 to 9
function getNumber() {
    return Math.random() * 10
}

console.log(getNumber());


// // Add comments to explain what this function does. You're meant to use Google!    
// calling string and returns a new string.
function s(w1, w2) {
    w1= "****** "  
    w2 = "I"+" like " + "pide. "
    return w1.concat(w2);
}
console.log(s());




function concatenate(firstWord, secondWord, thirdWord) {
    // firstWord="I";
    // secondWord=" am "
    // thirdWord=36;
   return firstWord+secondWord+thirdWord; // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }
  
    console.log(`${test_name}: ${status}`)
}
  
test("concatenate function - case 1 works", concatenate('Code', ' Your ', 'Future') === "Code Your Future")
test("concatenate function - case 2 works", concatenate('I', ' like ', 'pide.') === "I like pide.")
test("concatenate function - case 3 works", concatenate('I', ' am ', 36) === "I am 36")
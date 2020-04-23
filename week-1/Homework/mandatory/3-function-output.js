// Add comments to explain what this function does. You're meant to use Google!
//Math.random (); returns a random number between 0 (inclusive) and 1 (exclusive)https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 10, multiply your answer by 10:
Math.random() * 10
function getNumber() {
    return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
//It's a function with the name  of s it has two parameters w1,w2 and the return will concatenate the two strings
function s(w1, w2) {
    return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
    
    
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
    return firstWord.concat(" " + secondWord + " " + thirdWord);
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
  
test("concatenate function - case 1 works", concatenate('code', 'your', 'future') === "code your future")
test("concatenate function - case 2 works", concatenate('I', 'like', 'pizza') === "I like pizza")
test("concatenate function - case 3 works", concatenate('I', 'am', 13) === "I am 13")
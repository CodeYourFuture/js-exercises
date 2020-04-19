// Add comments to explain what this function does. You're meant to use Google!
//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).
//The getNumber function returns the product of that random number and 10. 
function getNumber() {
    
        return Math.random() * 10;
}

console.log(getNumber());

// Add comments to explain what this function does. You're meant to use Google!
//This function joins two strings together (w1 and w2) using the .concat function. 
function s(w1, w2) {
    return w1.concat(w2);
}

console.log(s("Good", " Morning"));

function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
    return firstWord.concat(" " + secondWord + " " + thirdWord);
}

console.log(concatenate('code', 'your', 'future'));

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
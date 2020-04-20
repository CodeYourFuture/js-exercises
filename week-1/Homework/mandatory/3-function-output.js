// Add comments to explain what this function does. You're meant to use Google!

// Math.random() method returns a number between 0 (include) and 1 (exclude) and getNumber function multiply this random number with 10 this random and returns the result   
function getNumber() {
    return Math.random() * 10;
}



// Add comments to explain what this function does. You're meant to use Google!
// concat method concatinate the strings which are given as parameter
function s(w1, w2) {
    return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together

    //First Solution
    //return firstWord + " " + secondWord + " " + thirdWord;

    //Second Solution
    return firstWord.concat(" ", secondWord, " ", thirdWord);

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

test("concatenate function - case 1 works", concatenate('code', 'your', 'future') === "code your future")
test("concatenate function - case 2 works", concatenate('I', 'like', 'pizza') === "I like pizza")
test("concatenate function - case 3 works", concatenate('I', 'am', 13) === "I am 13")
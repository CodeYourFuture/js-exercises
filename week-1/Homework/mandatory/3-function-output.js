// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10;
}
//{ this function returns the result of (random numbers lower than 1 , multiply 10) }

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2);
}
//{this function will return the combination of w1 and w2 with in a new and same type of them, if w1 and w2 are arrays it will merge them and return new array(the combination of w1 and w2) or if they are string it will return a new string with the combination of them }

function concatenate(firstWord, secondWord, thirdWord) {
    let space = " ";
    let result = s(firstWord + space,s(secondWord,space + thirdWord));
    return result;
    // Write the body of this function to concatenate three words together
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
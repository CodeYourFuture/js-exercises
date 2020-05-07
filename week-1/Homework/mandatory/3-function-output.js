// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10;
}
/* Math.random() return number between 0 and 1 which are with Distinguished mark -/- and by multiply 10 
  we can have numbers between 0 and 10 in other words we delet the distinguished mark.
 ------------------------------------------------------------------------ 
  
  */
// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2);
}

// is used to merge two or more arrays and returns a new array.

function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 

    let space = " ";
    let first = firstWord.concat(space, secondWord);
    let third = first.concat(space, thirdWord);
    return third


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
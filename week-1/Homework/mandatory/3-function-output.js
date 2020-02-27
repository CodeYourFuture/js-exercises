// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10; // returns a number between zero and ten.
}
// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2); //The concat() method concatenates the string arguments to the calling string and returns a new string.
}
function concatenate(firstWord, secondWord, thirdWord) {
    const ret = firstWord + " " + secondWord + " " + thirdWord;
    console.log(ret);
    return ret;
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
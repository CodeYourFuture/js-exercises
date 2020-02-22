function getNumber() {
    return Math.random() * 10;
}

// Answer these questions:
// - What does this program do?
// - How many parameters does the function take?
// - What is the function name?
// - Where is the function called? with what parameters?

function s(w1, w2) {
    return w1.concat(w2);
}

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
// - How many parameters does the function take?
// - What is the function name?
// - Where is the function called? with what parameters?
// - What does the function return?
// - How can this function be improved?

function concatenate(firstWord, secondWord, thirdWord) {
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
  
test("concatenate function works", concatenate('code', 'your', 'future') === "code your future")
test("concatenate function works", concatenate('I', 'like', 'pizza') === "I like pizza")
test("concatenate function works", concatenate('I', 'am', 27) === "I like 27")
// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {

//in this getNumber() function Math.Random() takes any ranom number between 0 and 1  than whatever the result of the output
//it multiplies with 10 and returns it..
    return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    //function s takes two strings w1 and w2 as input and concat them means append string w2 at the end of w1.
    return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
  return firstWord.concat(' ',secondWord, ' ',thirdWord);
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
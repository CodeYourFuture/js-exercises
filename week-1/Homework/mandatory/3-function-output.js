// Add comments to explain what this function does. You're meant to use Google!

//Math.random() generates a number between 0 and 1 and this fucntion returns a number between 0 and 10

function getNumber() {
    return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

//The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.If the arguments are not of the type string, they are converted to string values before concatenating.

// it takes two entity and concatinate them.w1 has to be string but w2 can be numbers aswell

function s(w1, w2) {
    return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {

   return firstWord.concat(" ",secondWord, " ",thirdWord);
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
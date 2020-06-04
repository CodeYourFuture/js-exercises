// Add comments to explain what this function does. You're meant to use Google!,  
function getNumber() {
    return Math.random() * 10;
}
// A Math.random(), only displays "floting points"(witch is baseicly just numbers using to show result), 
// numbers that are between 0 -1, 0 is shown but not 1. With approximantly unchangeble distribution.
// You can then change those numbers to whatever you want. Then once you changed the scale.
// It chouses a number between the scale at random, again not incloding the maxiem number but the minimem (in this case 0)
// witch can also be included. However, in this case there is a " * 10" on line 3.
// This means that what ever the algorithom choses the number, it will get multipiled by 10.


// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2);
}

// the concat() methord concatonats the string arguments to the calling string and then returns a new strin. 
// in this case, in line 15 the return will be w1 and then w2 will be added.



function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    return firstWord.concat(" ",secondWord," ",thirdWord);
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
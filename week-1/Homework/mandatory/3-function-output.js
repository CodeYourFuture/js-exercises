// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10; //this part "getting a random number between 0 (inclusive) and 1 (exclusive)"
}
console.log(0.156 * 10);
/* The Math.random() function returns a floating-point, 
pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
 with approximately uniform distribution over that range 
 — which you can then scale to your desired range. 
 The implementation selects the initial seed to the random number generation algorithm;
  it cannot be chosen or reset by the user.  */




// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
   
    
    return w1.concat(w2); 

    /* The concat() method is used to join two or more strings.
    This method does not change the existing strings,
    but returns a new string containing the text of the joined strings. */
}





function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 

    return `${firstWord} ${secondWord} ${thirdWord}`;
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
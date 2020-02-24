// Add comments to explain what this function does. You're meant to use Google!
function getNumber() { 
    return Math.random() * 10;
}

// This function returns a pseudo-random (whic means it can be predictable) number between 0 and 1 (including 0, excluding 1)
//and multiplies it with 10. I have tested it with commands below and here are some results 6.536445233946832, 8.828485580060894
const rndm = getNumber();
console.log(rndm);

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2);
}
// This function joins two words to eachother or in other words, attach w2 to end of W1. 
//i.e; Result of the below code is "SerkanCavus" without space. 
const concatWords = s("Serkan", "Cavus");
console.log(concatWords);


function concatenate(firstWord, secondWord, thirdWord) {
    return `${firstWord} ${secondWord} ${thirdWord}`;
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
}
const treeWordConcat = concatenate("I", "love", "CYF");
onsole.log(treeWordConcat);
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
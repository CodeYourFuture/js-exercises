// Add comments to explain what this function does. You're meant to use Google!
const assert = require("assert");

function getNumber() {
  //   assert(typeof);
  return Math.random() * 10; //get the number and returns a random number from 0 to 9
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2); //concatenate string called w1 and w2
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return firstWord.concat(" " + secondWord + " " + thirdWord);
  // "I " + firstWord + " am" + secondWord + " 13 " + thirdWord + " I am 13"
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future") === "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza") === "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13) === "I am 13"
);

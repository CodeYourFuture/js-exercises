// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
  return Math.random() * 10;
}
/* The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.
 The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
 * 10 that means random number between 0-10.
 for Getting a random integer between two values, we can use min and max values  The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
*/

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}
/*
it is concatenates the string arguments to the calling string and returns a new string.
it is Changes to the original string or the returned string don't affect the other.
*/

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return firstWord.concat(" ", secondWord, " ", thirdWord);
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

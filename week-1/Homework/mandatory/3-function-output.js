// Add comments to explain what this function does. You're meant to use Google!!!..

// returns a Number value with positive sign, greater than or equal to 0 but less than 1 , chosen randomly or pseudo-randomly with approximately uniform distribution over that range and multiply it to 10

function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
//The concat() function concatenates the string arguments to the calling string and returns a new string.Here we concated w1 to W2 and return a new value.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
  return firstWord + " " + secondWord + " " + thirdWord;
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

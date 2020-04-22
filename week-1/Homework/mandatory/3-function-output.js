// Add comments to explain what this function does. You're meant to use Google!

// A floating-point,pseudo-random number between 0 to 10.
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

//The concat() method is used to join two or more strings.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" " + secondWord, " " + thirdWord);
  // Write the body of this function to concatenate three words together
  // Look at the test case below to understand what to expect in return
}
console.log(concatenate("code", "your", "future"));
console.log(concatenate("I", " like", " pizza"));
console.log(concatenate("I", " am ", 13));

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

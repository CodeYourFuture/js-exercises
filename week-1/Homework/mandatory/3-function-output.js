//This fuction returns a floating-point (decimal) random number, from 0 to 1 (inclusive of 0, but not 1) and mutiply by 10.
function getNumber() {
  return Math.random() * 10;
}

// This function joins (concatenates) w1 and w2 strings and returns a new string containing the text of the joined strings.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return `${firstWord} ${secondWord} ${thirdWord}`;
  // I had to use template string method here
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

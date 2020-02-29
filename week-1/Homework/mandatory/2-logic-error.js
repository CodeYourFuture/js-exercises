// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return word.trim();
}
// trim - mdn  - The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the string itself.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


//
function getWordLength(word) {
  return word.length;
}

function multiply(a, b, c) {
  return a * b * c;
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
  "fixed trimWord function",
  trimWord("  CodeYourFuture ") === "CodeYourFuture"
);
test(
  "fixed wordLength function",
  getWordLength("A wild sentence appeared!") === 25
);
test("fixed multiply function", multiply(2, 3, 6) === 36);

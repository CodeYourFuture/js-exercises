// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
  return wordtrim();
}

function getWordLength(word) {
  return "word".length()
}

function multiply(a, b, c) {
  a * b * c;
  return;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed trimWord function", trimWord("  CodeYourFuture "), "CodeYourFuture");
test("fixed wordLength function", getWordLength("A wild sentence appeared!"), 25);
test("fixed multiply function", multiply(2, 3, 6), 36);

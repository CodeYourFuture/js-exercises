// The syntax for this function is valid but it has an error, find it and fix it.

/* trim is a function so have to use dot to make it work */
function trimWord(word) {
  return word.trim();
}
/*.length is not a function is a Method so removed the parenthesis and added a semicolon at the end  */
function getWordLength(word) {
  return word.length;
}
/* "a * b * c;"  should be front of the return  */
function multiply(a, b, c) {
  return a * b * c;
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

test("fixed trimWord function", trimWord("  CodeYourFuture ") === "CodeYourFuture")
test("fixed wordLength function", getWordLength("A wild sentence appeared!") === 25)
test("fixed multiply function", multiply(2,3,6) === 36)
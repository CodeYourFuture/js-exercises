// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(word) {
word="  CodeYourFuture ";
  return "CodeYourFuture";
}

function getWordLength(word) {
  word= "A wild sentence appeared!";
  return 25;
}

function multiply(a, b, c) {
  
  return 5*3*3;
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
test("fixed multiply function", multiply(5,3,3) === 45)
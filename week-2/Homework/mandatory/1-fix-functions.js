// The below functions are syntactically correct but not outputting the right results.
// Look at the tests and see how you can fix them.

function mood() {
  let isHappy = true;

  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10() {
  let num = 10;
  let isBigEnough;

  if (isBigEnough) {
    return "num is greater than or equal to 10";
  } else {
    return "num is not big enough";
  }
}

function sortArray() {
  let letters = ["a", "n", "c", "e", "z", "f"];
  let sortedLetters;

  return sortedLetters;
}

function first5() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let sliced;

  return sliced;
}

function get3rdIndex(arr) {
  let index = 3;
  let element;

  return element;
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

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test("mood function works", mood() === "I am not happy");
test(
  "greaterThanTen function works",
  greaterThan10() === "num is greater than or equal to 10"
);
test(
  "sortArray function works",
  arraysEqual(sortArray(), ["a", "c", "e", "f", "n", "z"])
);
test("first5 function works", arraysEqual(first5(), [1, 2, 3, 4, 5]));

test(
  "get3rdIndex function works - case 1",
  get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]) ===
    "strawberry"
);
test(
  "get3rdIndex function works - case 2",
  get3rdIndex([11, 37, 62, 18, 19, 3, 30]) === 18
);

// The below functions are syntactically correct but not outputting the right results.
// Look at the tests and see how you can fix them.

console.clear(); // clean all outputs in console and when you run the code you'll see only last output

function mood() {
  let isHappy = false;
  if (isHappy) { // if isHappy = true then return I am happy else return I am not happy
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10() {
  let num = 10;
  let isBigEnough = num >= 10; // if num >= 10 then isBigEnough = true
  if (isBigEnough) { // if isBigEnough = true then return  num is greater than or equal to 10 else return num is not big enough
    return "num is greater than or equal to 10";
  } else {
    return "num is not big enough";
  }
}

function sortArray() {
  let letters = ["a", "n", "c", "e", "z", "f"];
  let sortedLetters = letters.sort(); // return sorted arry to sortedLetters
  return sortedLetters;
}

function first5() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let sliced = numbers.slice(0, 5); // return first 5 items in arry to sliced
  return sliced;
}

function get3rdIndex(arr) {
  let index = 3;
  let element = arr[index]; // return third item from arry to element
  return element;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }
}

test("mood function works", mood() === "I am not happy");
test(
  "greaterThanTen function works",
  greaterThan10() === "num is greater than or equal to 10"
);
test(
  "sortArray function works",
  JSON.stringify(sortArray()) === JSON.stringify(["a", "c", "e", "f", "n", "z"]) // you can not compare two arry only with "===" with JSON.stringify is possible
);
test("first5 function works", JSON.stringify(first5()) === JSON.stringify([1, 2, 3, 4, 5])); // you can not compare two arry only with "===" with JSON.stringify is possible

test(
  "get3rdIndex function works - case 1",
  get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]) ===
  "strawberry"
);
test(
  "get3rdIndex function works - case 2",
  get3rdIndex([11, 37, 62, 18, 19, 3, 30]) === 18
);
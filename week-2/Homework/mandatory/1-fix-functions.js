// The below functions are syntactically correct but not outputting the right results.
// Look at the tests and see how you can fix them.

function mood() {
  let isHappy = false;

  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}
console.log(mood());

function greaterThan10(num) {

  if (num >= 10) {
    return console.log("num is greater than or equal to 10");
  } else {
    return console.log("num is not big enough");
  }
}
greaterThan10(11);

// function sortArray(arr) {
// //   let arr = ["a", "n", "c", "e", "z", "f"];
//   arr = arr.sort();
//   return arr
// }

// console.log(sortArray())


function first5() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  //numbers = numbers.slice(0,5);
  return numbers.slice(0,5);
}

console.log(first5())


function get3rdIndex(element) {
  let index = 3;
  let numElement = [11, 37, 62, 18, 19, 3, 30];
  let strElement = ["fruit", "banana", "apple", "strawberry", "raspberry"];

  return numElement[index], strElement[index];
}
//console.log(get3rdIndex(numElement[index]))
//console.log(get3rdIndex(stringElement[index]))


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

test("mood function works", mood() === "I am not happy");
test(
  "greaterThanTen function works",
  greaterThan10() === "num is greater than or equal to 10"
);
test(
  "sortArray function works",
  sortArray() == ["a", "c", "e", "f", "n", "z"]
);
test("first5 function works", first5() === [1, 2, 3, 4, 5]);

test(
  "get3rdIndex function works - case 1",
  get3rdIndex(["fruit", "banana", "apple", "strawberry", "raspberry"]) ===
    "strawberry"
);
test(
  "get3rdIndex function works - case 2",
  get3rdIndex([11, 37, 62, 18, 19, 3, 30]) === 18
);
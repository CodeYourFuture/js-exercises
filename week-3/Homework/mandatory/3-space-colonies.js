/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.
  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".
  Hint: whenever you read the above the instructions, try to come up with the main input and output and logic
  Input is an array
  Output is an array
  logic only strings that start with A, and finish with family
  
*/

//input is a list of names of all voyagers [an array]
// I want to check each element for the following conditions
// if the element contains the string 'family' is true, put in the new array (push??) (include??)
// if the string starts with A. is true, put the item in the new array (push??) charAt.
// I'll have to create a new array 


// to find first letter of a string 
// let string = "hellow world"
// let firstLetter = string.charAt(0)
// console.log(firstLetter)
//return firstLetter - might not need a return
// output is h

const voyagers = ["Adam family", "Potter family", "Eric", "Aldous", "Button family", "Jude", "Carmichael", "Bunny", "Asimov", "Oscar family",
  "Avery family", "Archer family"];

function colonisers(arr) {

let newArr = arr.filter (function check (name) {

  if (name.charAt(0) === "A" && name.includes("family")) {
    return name
   }
   else {
     return 
   }

});
return newArr

}

const checkFirstLetter = (colonisers(voyagers))
console.log(checkFirstLetter)

/* ======= TESTS - DO NOT MODIFY ===== */


function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

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
  "colonisers function works",
  arraysEqual(colonisers(voyagers), [
    "Adam family",
    "Avery family",
    "Archer family",
  ])
);



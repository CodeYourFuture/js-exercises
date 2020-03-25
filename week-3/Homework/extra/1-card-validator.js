// ## **PROJECT: Credit Card Validator**

// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
// - The following credit card numbers are valid:

// ```markdown
// 9999777788880000
// 6666666666661666
// ```

// The following credit card numbers are invalid:

// ```markdown
// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
// ```

// These are the requirements your project needs to fulfill:

// - Make a JavaScript file with a name that describes its contents
// - Create a function with a descriptive name, for example: `doSomething` or `calcAnotherThing`
// - Write at least 2 comments that explain to others what a line of code is meant to do
// - Make the return value of the function a template string, so you can insert variables!
// - Use `node` from the command line to test if your code works as expected

// Good luck!

function validateCreditCard(cardNum) {
  // Changing the number to an array of single digit strings.
  let digitsAsStringsArr = String(cardNum).split("");
  let len = digitsAsStringsArr.length;
  let isNumber = /[0-9]/;
  let description;
  // If any of the following conditions is true the number will be invalid.
  if (
    len !== 16 ||
    digitsAsStringsArr.some(element => !isNumber.test(element)) ||
    digitsAsStringsArr.every(element => element === digitsAsStringsArr[0]) ||
    parseFloat(digitsAsStringsArr[len - 1]) % 2 !== 0 ||
    digitsAsStringsArr
      .map(element => parseFloat(element))
      .reduce((a, b) => a + b, 0) < 16
  ) {
    description = "invalid";
  } else {
    description = "valid";
  }
  return `The credit card number: ${cardNum} is ${description}.`;
}

/*=======================================================TEST=======================================================*/

console.log(
  `Expected result: The credit card number: 9999777788880000 is valid. Actual result:`,
  validateCreditCard("9999777788880000")
);
console.log(
  `Expected result: The credit card number: 6666666666661666 is valid. Actual result:`,
  validateCreditCard("6666666666661666")
);
console.log(
  `Expected result: The credit card number: a92332119c011112 is invalid. Actual result:`,
  validateCreditCard("a92332119c011112")
);
console.log(
  `Expected result: The credit card number: 4444444444444444 is invalid. Actual result:`,
  validateCreditCard("4444444444444444")
);
console.log(
  `Expected result: The credit card number: 1111111111111110 is invalid. Actual result:`,
  validateCreditCard("1111111111111110")
);
console.log(
  `Expected result: The credit card number: 6666666666666661 is invalid. Actual result:`,
  validateCreditCard("6666666666666661")
);

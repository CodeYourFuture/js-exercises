/* EXERCISE 2 - ES6 Syntax
 * This file is composed of a series of functions which perform operations using ES5 syntax
 * (i.e. what we referred to as "traditional" Javascript in class)
 *
 * Refactor the code below to use as many ES6 syntax as possible
 *
 * Remember to use:
 *  - let
 *  - const
 *  - template literals
 *  - default parameters
 *  - destructuring
 *  - arrow functions
 */

// Function returns a single expression - what does this remind you of?
const convertFahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

// Use template literals wherever your see concatenation
function multiplyByTwo(number) {
  return `${number} is equal to ${number * 2}  when multiplied by 2.`;
}

// Instead of assigning individual values to a variable, you could..
function parseObject() {
  var obj = {
    name: "Jane",
    age: "26",
    role: "Web Developer"
  };

  var { name, age, role } = obj;
  /* var name = obj.name
  var age = obj.age
  var role = obj.role
 */
  return `Hello, ${name}. You are ${age} years old and you work as a ${role}.`;
}

const parseList = () => {
  const shoppingList = ["apples", "oranges", "pears"];

  const [first, second, third] = shoppingList;
  return `First I bought some ${first}, then I bought some ${second},\nand I almost forgot to buy some ${third}!`;
};

const myHouse = (location, color = "blue", rooms = 2) =>
  `I live in ${location} in a ${color} house with ${rooms} rooms.`;

// This function should ensure that the name variable can never be overwritten, but that the location variable can only be overwritten inside the `if` block
function toLetOrNotToLet() {
  const name = "John";
  let location = "London";

  if (location == "London") {
    location = "home";
    console.log(`My name is ${name} and I am at ${location} now.`);
  } else {
    console.log(`But I am also in ${location}!`);
  }
}

/* DO NOT EDIT BELOW THIS LINE */

// Expected output: 5
console.log(convertFahrenheitToCelsius(41));

// Expected output: '15 is equal to 30 when multiplied by 2'
console.log(multiplyByTwo(15));

// Expected output: 'Hello, Jane. You are 26 years old and you work as a Web Developer'
console.log(parseObject());

// Expected output: 'First I bought some apples, then I bought some oranges and I almost forgot to buy some pears!'
console.log(parseList());

// Expected output: 'I live in Kent in a white house with 2 rooms'
console.log(myHouse("Kent", "white"));

// Expected output: "My name is John and I am at home now. But I am also in London!"
toLetOrNotToLet();

/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/

let person = {
  name: "Alice",
  age: 25,
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
person.greet = function () {
  return "Hello everybody";
};

console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);

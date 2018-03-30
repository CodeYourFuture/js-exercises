/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/

var person = {
  name: "Alice",
  age: 25
};

var person = {
  name: "Alice",
  age: 25,
  sayHello: function() {
    return "how are you";
  }
};
person.sayHello();
console.log(person.sayHello());

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Expected result: Hello everybody. Actual result: " + person.greet()
);

/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/

var person = {
  name: "Alice",
  age: 25
};
person.greet = function() {
  console.log("Hello everybody");
};

//the expecetd result hasnt logged this.name so are we suppose to just print a vague hello everybody?

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Expected result: Hello everybody. Actual result: " + person.greet()
);

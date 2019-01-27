/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];
var livingWriters = [];

var writer = "writer";

function isAlive(writer) {
  return writers
    .filter(
      authour => authour.occupation === "writer" && authour.alive === true
    )
    .map(writers => writers);
}
livingWriters = isAlive(writer);

console.log(
  "Hi my name is " +
    livingWriters[0].firstName +
    " " +
    livingWriters[0].lastName +
    ". " +
    "I am " +
    livingWriters[0].age +
    " years old, and work as a " +
    livingWriters[0].occupation +
    "."
);
console.log(
  "Hi my name is " +
    livingWriters[1].firstName +
    " " +
    livingWriters[1].lastName +
    ". " +
    "I am " +
    livingWriters[1].age +
    " years old, and work as a " +
    livingWriters[1].occupation +
    "."
);
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

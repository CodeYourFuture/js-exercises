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
  },
  {
    firstName: "Seraphine",
    lastName: "Young",
    occupation: "Dev",
    age: 28,
    alive: true
  }
];

writers.forEach(function(i) {
  if (i.firstName !== "Seraphine") {
    console.log(
      `Hi, my name is ${i.firstName} ${i.lastName} ${
        i.age
      } years old, and work as a ${i.occupation}`
    );
  }
});

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

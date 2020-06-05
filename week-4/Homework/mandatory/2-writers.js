/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

for (let i = 0; i < writers.length; i++) {
  function firstName(obj) {
    return obj[i].firstName;
  }
  function lastName(obj) {
    return obj[i].lastName;
  }
  function age(obj) {
    return obj[i].age;
  }
  function occupation(obj) {
    return obj[i].occupation;
  }
  console.log(
    "Hi, my name is " +
      firstName(writers) +
      lastName(writers) +
      "." +
      " I am " +
      age(writers) +
      " years old, and work as a " +
      occupation(writers) +
      "."
  );
}
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

for (let i = 0; i < writers.length; i++) {
  function isAlive(obj) {
    if (obj[i].alive === true) {
      console.log(obj[i].firstName + obj[i].lastName);
      return obj[i].firstName + obj[i].lastName;
    }
  }
  isAlive(writers);
}

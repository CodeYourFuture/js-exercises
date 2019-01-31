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

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

var filterAliveWriters = writers.filter(alive => alive.alive == true);

var deadOrAlive = filterAliveWriters.forEach(item => {
  console.log(
    "Hi, my name is " +
      item.firstName +
      " " +
      item.lastName +
      ".  I am " +
      item.age +
      " years old, and work as a " +
      item.occupation
  );
});

// var foreNames = writers.forEach(element => {
//   console.log(
//     "Hi, my name is " +
//       element.firstName +
//       " " +
//       element.lastName +
//       ".  I am " +
//       element.age +
//       " years old, and work as a " +
//       element.occupation
//   );
// });

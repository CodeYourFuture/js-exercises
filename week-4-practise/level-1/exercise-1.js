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
];

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
<<<<<<< Updated upstream:week-4-practise/level-1/exercise-1.js
*/
=======
<<<<<<< Updated upstream:week-4/Homework/mandatory/2-writers.js
*/
=======
<<<<<<< Updated upstream:week-4-practise/level-1/exercise-1.js
*/
=======
*/
writers.filter(writer => writer.alive).forEach(writer => console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`))
>>>>>>> Stashed changes:week-4/Homework/mandatory/2-writers.js
>>>>>>> Stashed changes:week-4-practise/level-1/exercise-1.js
>>>>>>> Stashed changes:week-4/Homework/mandatory/2-writers.js

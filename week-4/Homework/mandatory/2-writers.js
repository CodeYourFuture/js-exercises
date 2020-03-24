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
let allWriters = writers.forEach(all => console.log(`Hi, my name is ${all.firstName} ${all.lastName}. I am ${all.age} years old, and work as a ${all.occupation}.`))
/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/
let writersAlive = writers.filter(person => person.alive === true).map(person => console.log(`${person.firstName}  ${person.lastName}`))

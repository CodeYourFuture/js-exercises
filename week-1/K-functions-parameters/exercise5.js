// Declare your function here
function createLongGreeting(name, number) {
  return "Hello, my name is" + name + "and I'm" + number + " years old";
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);

// ignore below

module.exports = { createLongGreeting };

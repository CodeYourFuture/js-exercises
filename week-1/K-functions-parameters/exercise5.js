// Declare your function here
function createLongGreeting(string, num) {
  var x = "Hello, my name is Daniel, and I am ";
  var y = " " + x + +30 + " years old.";

  return y;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);

// ignore below

module.exports = { createLongGreeting };

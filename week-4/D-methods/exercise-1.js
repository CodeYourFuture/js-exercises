/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/


var person = {
<<<<<<< Updated upstream
    name: "Alice",
    age: 25
=======
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hello" + " everybody";
  }
>>>>>>> Stashed changes
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/


console.log("Expected result: Hello everybody. Actual result: " + person.greet());
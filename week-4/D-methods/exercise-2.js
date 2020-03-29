/* 
A person named Alice is defined below. 
Add a method "sayName" so this person can say their own name. 
Hint: use 'this' keyword to access the name property.
*/

<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-2.js

var person = {
    name: "Alice",
    age: 25
=======
var person = {
  name: "Alice",
  age: 25,
  sayName: function() {
    return "My name is " + this.name;
  }
>>>>>>> Stashed changes:week-4/D-methods/exercise-2.js
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

<<<<<<< Updated upstream:week-4/D-methods/exercise-2.js
console.log("Expected result: 'My name is Alice'. Actual result: " + person.sayName());
=======
<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-2.js
console.log(`Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`);
=======
console.log(
  "Expected result: 'My name is Alice'. Actual result: " + person.sayName()
);
>>>>>>> Stashed changes:week-4/D-methods/exercise-2.js
>>>>>>> Stashed changes:week-4/InClass/D-methods/exercise-2.js

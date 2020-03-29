/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-4.js

var person = {
    name: "Alice",
    friends: ["John", "Nina"]
=======
var person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend: function(newFriend) {
    return this.friends.push(newFriend);
  }
>>>>>>> Stashed changes:week-4/D-methods/exercise-4.js
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

<<<<<<< Updated upstream:week-4/D-methods/exercise-4.js
console.log("Expected result: 'John,Nina,Bob'. Actual result: " + person.friends);
=======
<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-4.js
console.log(`Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`);
=======
console.log(
  "Expected result: 'John,Nina,Bob'. Actual result: " + person.friends
);
>>>>>>> Stashed changes:week-4/D-methods/exercise-4.js
>>>>>>> Stashed changes:week-4/InClass/D-methods/exercise-4.js

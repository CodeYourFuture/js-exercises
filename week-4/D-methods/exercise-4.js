/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

var person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriends: function() {
    this.friends = this + 1;
  }
};

var newFriend = person.makeFriends("Austine");
console.log(newFriend);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  "Expected result: 'John,Nina,Bob'. Actual result: " + person.friends
);

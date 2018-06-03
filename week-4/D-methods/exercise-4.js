/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

var person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend: function(newFriend) {
    //return (this.friends += "," + newFriend);
    return this.friends.push(newFriend);
    //return this.friends.push() += newFriend;// why is this not working?????
  }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  "Expected result: 'John,Nina,Bob'. Actual result: " + person.friends
);

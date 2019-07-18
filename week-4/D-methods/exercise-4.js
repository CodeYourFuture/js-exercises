/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

var person = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend: function(newfriend) {
    this.friends = this.friends + "," + newfriend;
  }
};
/*
 why we get the number of our values 
 by using this way 
 this.friends.push(newfriend);
*/
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  "Expected result: 'John,Nina,Bob'. Actual result: " + person.friends
);

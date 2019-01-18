// find all the names thats start with an A :

var names = ["Alice", "benjamin", "Angela", "Adam", "Bob"];
// write answer here
var nameStartWithA = names.filter(name => name[0] === "A");
console.log(nameStartWithA);

/*expected result
["Alice","Angela", "Adam"]
*/

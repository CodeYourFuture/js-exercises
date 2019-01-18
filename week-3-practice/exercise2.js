/*
In this exercise, you are a grandmother. You can't remember all of your grandchildren's names or 
how old they all are. You do know that none of your grandchildren are over 20 years old.

To remind yourself, use the .filter() method to filter the ages array. 
After that, use the .map method and create a function which returns a message like this:
'Mac is 10 years old' using data from both grancChildNames array and the ages array.


*/
var grandChildNames = [
  "Mac",
  "Charlie",
  "Dennis",
  "Frank",
  "Dee",
  "Waitress",
  "Cricket"
];
var ages = ["10", "12", "8", "33", "7", "50", "24"];

function filterAges(name) {
  return ;
}

var filterAges = ages.filter(x => x<20);

var grandChildNamesAndAges = filterAges.map(function (item, index) {
  return `${grandChildNames[index]} is ${item} years old`;
});
console.log(grandChildNamesAndAges);

/*

Expected Output
'Mac is 10 years old',
'Charlie is 12 years old',
'Dennis is 8 years old',
'Frank is 7 years old'



*/
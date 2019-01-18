/*
In this exercise, the generateRandomName function will generate a different array index every time the code
is executed. Your task is to create a function to use with the .filter() method which will return
the name that the generateRandomName function came up with. 


You should only return one name from the array.
Do not edit the names array.
Do not edit the generateRandomName function.

*/

var names = [
  "Jake",
  "Diaz",
  "Terry",
  "Amy",
  "Boyle",
  "Gina",
  "Holt",
  "Hitchcock",
  "Skully",
  "Cheddar",
  "Kevin"
];

function generateRandomName(arr) {
  var generateIndex = (Math.random() * 10).toFixed();
  return arr[generateIndex];
}

function filterNames(name) { }

var filteredName = generateRandomName(names);

console.log(filteredName);
/*
EXPECTED OUTPUT:
[ 'Gina' ]
[ 'Diaz' ]
[ 'Hitchcock' ]

*/

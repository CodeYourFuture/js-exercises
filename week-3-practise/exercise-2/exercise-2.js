/* you have been given array of names,
you are required to create a  function that will only display the name and occupation in each array
use array map method to display only the first and last element in each arry
*/
//Do not change the array
var details = [
  ["Mildred", 20, "Chemist"],
  ["Jerry", 24, "Engineer"],
  ["Choke", 30, "Doctor"],
  ["Murice", 28, "House wife"],
  ["Daniel", 30, "Baron"],
  ["Micheal", 34, "Judge"]
];

var nameAndDepartment = details.map(names => [names[0], names[2]]); //complete the statement

console.log(nameAndDepartment);

// remember we are only looking for two element in each array

/*Expected output
[['Mildred', 'Chemist'],
   ['Jerry', 'Engineer'],
   ['Choke', 'Doctor'],
   ['Murice', 'House wife'],
   ['Daniel', 'Baron'],
   ['Micheal', 'Judge']]
   */

/*You have an array named "employees"  wich contain all the employees work in a company along with their salary.
-Calculate and log the the average salary of the employees 
-Hint use the method forEach
 */

var employees = [
  ["Ahmed", "£1500"],
  ["Clement", "£1577.87"],
  ["Elamin", "£1478.43"],
  ["Adam", "£7684.5"],
  ["Tayoa", "£3565.34"],
  ["Nina", "£3565.12"]
];

var total = 0;
employees.forEach(function(item) {
  return (total += Number(item[1].substr(1)));
});

console.log(total / employees.length);

/*Expected output
3228.54
*/

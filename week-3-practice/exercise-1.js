/* Vat calculator: write a program that takes an array of numbers 
 then calculates and returns 20% of each value rounded to 2 decimal places. 
  An array of numbers is  provided */

var sales = [17, 20, 15, 59, 60];

var vatOnSales = sales.map(number => number * 0.2); // input your code here

function financial(x) {
  return Number.parseFloat(x);
}
var decimalP = vatOnSales.map(financial);

var final = decimalP.map(num => Number(num).toFixed(2));

console.log(final);

// Expected result: [3.40, 4.00, 3.00, 11.80, 12.00]

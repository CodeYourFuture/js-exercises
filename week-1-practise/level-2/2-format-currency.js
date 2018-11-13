/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00
*/

//Try Math.round(num * 100) / 100 or roundToTwo(1.2323) // this inputs 1.23
//OR: Number(Math.round(1.005+'e2')+'e-2'); // 1.01
//OR: toFixed(2)
function formatCurrency(product) {
  return "£" + product.toFixed(2);
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

function calculateSalesTax(price) {
  return price * 0.2;
}

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: " + formatCurrency(price));
console.log("Sales tax: " + formatCurrency(salesTax));
console.log("Total: " + formatCurrency(price + salesTax));

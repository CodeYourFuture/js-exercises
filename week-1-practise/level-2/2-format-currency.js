/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00
*/

function formatCurrency(price) {
  return price.toFixed(2);
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

/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(num) {
  return num * 0.2
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + (price + salesTax));
//I noticed to get use of the prettier function you need to press alt+shift+f. it is not automatical 
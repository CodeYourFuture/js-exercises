/*
  SALES TAX
  =========
  A business requires a program that caluclates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(price) {
return price,newPrice,discount;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var discount= 10;
var newPrice = 30; 
var salesTax = calculateSalesTax(price);
 var price = newPrice / 100 * price;
 var  price = discount / 100 * price;

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + price + salesTax);

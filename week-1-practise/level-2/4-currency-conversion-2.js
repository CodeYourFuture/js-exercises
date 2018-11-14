/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

// R$ symbol of the Brazilian Real. Rate of conversion from £ to $ is 1.4
// the conversion rate from £ to R$ is 4.9165 on the (14.11.18). Assuming that our currency is £
function convertToUSD(price) {
  return "$" + 1.4 * price * 1.01;
}
function convertToBRL(price) {
  return "R$" + 4.9165 * price * 1.01;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

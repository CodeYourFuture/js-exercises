/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

var feeRate = 1.01;
function convertToUSD(price) {
  return convert(price, 1.4, "$")
}
function convertToBRL(price) {
  return convert(price, 4.86, "R$");
}
function conver(price, exchangeRate, symbol) {
  return symbol + (price  *exchangeRate * feeRate).toFixed(2);
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

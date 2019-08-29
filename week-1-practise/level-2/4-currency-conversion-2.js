/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertTo(price, exchangeRate) {
  return price * exchangeRate + price * (1 / 100);
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var USD = 1.4;
var BRL = 5.02;
var price = 12.5;
var priceInUSD = convertTo(price, USD);
var priceInBRL = convertTo(price, BRL);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

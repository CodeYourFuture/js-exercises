/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function transcationFee(fee) {
  return fee * 0.01;
}

function convertToUSD(price) {
  var exchangeRate = 1.4;
  return price * exchangeRate;
}

function convertToBRL(price) {
  var exchangeRate = 1.4;
  var brlConverstionRateAndCharges = Math.round(price * exchangeRate - transcationFee(price));
  return brlConverstionRateAndCharges;
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
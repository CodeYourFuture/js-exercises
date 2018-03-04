/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  var usd = price * 1.4;
  var usdAndfee = usd + price * 0.01;

  return usdAndfee;
}

function convertToBRL(price) {
  var usDollarPrice = convertToUSD(price);
  var brazilRealPrice = usDollarPrice * 3.25;
  var brazilRealPriceAndFee = brazilRealPrice + usDollarPrice * 0.01;
  return "R$ ".concat(brazilRealPriceAndFee);
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + "$" + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

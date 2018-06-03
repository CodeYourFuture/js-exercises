/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
var freeRate = 1.01;
function convertToUSD(price) {
  // let currency = (price * 1.39) * freeRate.toFixed(2);
  // return Math.round(currency);
 return  convert(price, 1.4, "$");
}
function convertToBRL(price) {
  // let currency = (price * 4.86) * freeRate .toFixed(2);
  // return Math.round(currency);
  return convert(price, 4.86, "R$");
}

//simplification and modifcation

 function convert(price, exchangeRate, symbol){
   return symbol + (price * exchangeRate * freeRate).toFixed(2);
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

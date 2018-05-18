/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  const priceUSD = price * 1.4;
  return priceUSD + fee(priceUSD);
}

function convertToBRL(price) {
  const priceBRL = price * 4.8;
  return priceBRL + fee(priceBRL);
}

function fee(base) {
  return base / 100;
}

// Solution from class:

// const feeRate = 1.01;

// function convertToBrl(price) {
//   return convertToBrl(price, 4.86), "£");
// }

/* function convert (price, exchangeRate) {
return ("" + price * price * exchangeRate * feeRate).tofixed(2);
} */


/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
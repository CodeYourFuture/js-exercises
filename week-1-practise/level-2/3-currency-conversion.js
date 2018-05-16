/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

<<<<<<< HEAD
function convertToUSD(price) {
  var usdPrice = "$" + (price * 1.4).toFixed(2);
  return usdPrice;
}
=======
function convertToUSD() {}
>>>>>>> master

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);

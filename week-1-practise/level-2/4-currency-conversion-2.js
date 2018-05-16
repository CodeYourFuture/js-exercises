/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

<<<<<<< HEAD
function convertToUSD(price) {
  var usdPrice = "$" + (price * 1.4 * 1.01).toFixed(2);

  return usdPrice;
}
function convertToBRL(price) {
  var brlPrice = "R$" + (price * 4.86 * 1.01).toFixed(2);

  return brlPrice;
}

=======
function convertToUSD(price) {}
function convertToBRL(price) {}
>>>>>>> master

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

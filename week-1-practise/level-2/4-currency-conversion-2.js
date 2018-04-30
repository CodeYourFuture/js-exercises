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
   return convert(price, 1.4, "$");
//   return "$" + (price * 1.4 * feeRate).toFixed(2);

//   return usdPrice;
}
function convertToBRL(price) {
<<<<<<< HEAD
  return "£" + (price + price * 1.01).toFixed(2);
}

S
=======
  return convert(price, 4.86, "R$");
  // return "£" + (price + price * feeRate).toFixed(2);

  // return brlPrice;
 }
 
 function convert(price, exchangeRate, symbol) {
   return symbol + (price * exchangeRate * feeRate).toFixed(2);

 }
>>>>>>> week2-than
/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

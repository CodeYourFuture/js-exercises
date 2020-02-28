/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  return price * 1.4
}
function convertToBRL(price) {
  return price * 5.77 + 0.01 * price
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

let product = 'The life and times of Mozafar Haider'
let price = 12.5
let priceInUSD = convertToUSD(price)
let priceInBRL = convertToBRL(price)

console.log('Product: ' + product)
console.log('Price in USD: ' + priceInUSD)
console.log('Price in BRL: ' + priceInBRL)

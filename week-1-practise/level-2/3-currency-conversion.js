/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(number) {
  return number * 1.4
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

let product = 'The life and times of Mozafar Haider'
let price = 12.5
let priceInUSD = convertToUSD(price)

console.log('Product: ' + product)
console.log('Price in USD: ' + priceInUSD)

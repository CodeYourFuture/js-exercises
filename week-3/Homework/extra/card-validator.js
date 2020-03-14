const validateCreditCard = function(cardNumber) {
  // The credit card number must be 16 digits in length
  if (cardNumber.length !== 16) {
    return false
  }

  // All of the digits must be numbers
  if (isNaN(cardNumber)) {
    return false
  }

  // The credit card number must be composed of at least two different digits
  let obj = {}
  for (let i = 0; i < cardNumber.length; i++) {
    obj[cardNumber[i]] = true
  }
  if (Object.keys(obj).length < 2) {
    return false
  }

  // The final digit of the credit card number must be even
  if (cardNumber[cardNumber.length - 1] % 2 !== 0) {
    return false
  }

  // The sum of all the digits must be greater than 16
  let sum = 0
  for (let i = 0; i < cardNumber.length; i++) {
    sum += Number(cardNumber[i])
  }
  if (sum <= 16) {
    return false
  }

  return true
}

function cardValidator(cardNumbers) {}

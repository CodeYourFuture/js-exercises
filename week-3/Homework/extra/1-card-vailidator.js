const checkCard = function(cardNo) {
  if (cardNo.length !== 16 && isNaN(cardNo)) return false;

  // The final digit must be even
  let lastDigit = cardNo[cardNo.length - 1];
  if (lastDigit % 2 !== 0) return false;
};

function cardValidator(cNumbers) {
  return console.log(cNumbers.map(cn => checkCard(cNumbers)));
}

console.log(checkCard());

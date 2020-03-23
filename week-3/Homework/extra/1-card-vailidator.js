function validateCard(cardNo) {
  if (cardNo.length !== 16 && isNaN(cardNo)) return false;

  // The final digit must be even
  let lastDigit = cardNo[cardNo.length - 1];
  if (lastDigit % 2 !== 0) return false;

  // You must have at least two different digits represented (all of the digits cannot be the same)
  let obj = {};
  for (let i = 0; i < cardNumber.length; i++) {
    obj[cardNumber[i]] = true;
  }
  if (Object.keys(obj).length < 2) {
    return false;
  }
}

const cardNumbers1 = [
  "6786766656778888",
  "1234567890123456",
  "9999999999999999",
  "01928383922929a9",
  "1010101010101001",
  "2273829397627821"
];

console.log(cNumbers.map(cn => checkCard(cNumbers)));

console.log(checkCard(787657577897));

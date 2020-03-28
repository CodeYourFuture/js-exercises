function checkSum(num) {
    let creditCardNumber = [];
    let hasDifferentNumbers = false;
    let currentNumber; // undefined
    let count = 0;
    
    const numberToString = num.toString();
    
    for (let i = 0; i < numberToString.length; i++) {
      
      currentNumber = parseInt(numberToString[i], 10);
      
      if (!isNaN(currentNumber)) {
        creditCardNumber.push(currentNumber);
      }
    }
    
    let checkNum;
    
    creditCardNumber.forEach((number, i) => {
        
      if (!hasDifferentNumbers && checkNum != undefined) {
        hasDifferentNumbers = checkNum != number;
      }
      
      checkNum = number;
      count += number;
    });
    
    let lastDigit = creditCardNumber[creditCardNumber.length - 1];
    
    let isEven = lastDigit % 2 === 0;
    
    let greaterThanSixteen = count > 16;
    
    return creditCardNumber.length == 16 && hasDifferentNumbers && isEven && greaterThanSixteen;
  }
 
 console.log(checkSum(0001111111111112));
 
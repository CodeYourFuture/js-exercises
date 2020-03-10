const validateCreditCard = function(cardNumber){

    // The credit card number must be 16 digits in length
    if(cardNumber.length !== 16){
      return false;
    }
  
    // All of the digits must be numbers
    if(isNaN(cardNumber)){
        return false;
    }
  
    // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
    let obj = {};
    for(let i = 0; i < cardNumber.length; i++){
      obj[cardNumber[i]] = true;
    }
    if(Object.keys(obj).length < 2){
      return false;
    }
  
    // The final digit of the credit card number must be even
    if(cardNumber[cardNumber.length - 1] % 2 !== 0){
      return false;
    }
  
    // The sum of all the digits must be greater than 16
    let sum = 0;
    for(let i = 0; i < cardNumber.length; i++){
      sum += Number(cardNumber[i]);
    }
    if(sum <= 16){
      return false;
    }
  
    return true;
  };







function cardValidator(cardNumbers ) {



  
    return   console.log(cardNumbers.map( cardNumber => validateCreditCard(cardNumber)));
    // 
   
    }
    
    /* ======= TESTS - DO NOT MODIFY ===== */
    
    const cardNumbers1 = [ "9999777788880000", "6666666666661666", "a92332119c011112", "4444444444444444", "1111111111111110", "6666666666666661"]
    
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
      
        for (let i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
      
        return true;
    }
    
    function test(test_name, expr) {
        let status;
        if (expr) {
          status = "PASSED";
        } else {
          status = "FAILED";
        }
      
        console.log(`${test_name}: ${status}`);
    }
    
    test(
       "cardValidator function works - case 1",
       arraysEqual(
          cardValidator(cardNumbers1), [true, true, false, false, false, false]
       )
     );
    
  
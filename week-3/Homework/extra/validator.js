var regNum = new RegExp('[0-9]');
validateCardNum(num){
    return {
        num.length===16 &&
        regNum.test(num)! &&
        

    }
// if (
//     pass.length >= 5 &&
//     regexUpper.test(pass) &&
//     regexLower.test(pass) &&
//     regexNum.test(pass) &&
//     regexSymbol.test(pass) &&
//     !existingPass
//   ) {
//     return true;
//   } else {
//     return false;

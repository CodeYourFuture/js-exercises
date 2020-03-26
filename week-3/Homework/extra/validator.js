
var regNum = new RegExp('[0-9]');

let hasAtleasTwoNum = function(num){
    let splitNum = num.split();
   return (splitNum.map(digit=>digit==splitNum[1]))
}   

console.log(hasAtleasTwoNum(4444444444444444))
var regNonNum = new RegExp(/^[0-9]+$/);
validateCardNum = function(num){

    return (
        num.length===16 &&
        regNonNum.test(num)&&
        num[num.length-1]%2===0 &&
        num.split().reduce((a, b) => a + b)>16&&
        hasAtleasTwoNum(num)
    )
}
    console.log(validateCardNum("4444444444444444"))
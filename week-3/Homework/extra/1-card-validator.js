function validateCreditCard(cardno){
    //let res = (/^(?:[0-9]{12}(?:[0-9]{3}[02468])?)$/).test(cardno);
    let res = (/^(?:[0-9]{15}[02468])$/).test(cardno);
    let resArr = Array.from(String(cardno), Number);
    let int = resArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return (res && int >= 17);

}
console.log(validateCreditCard(1111111111111110));

// - The following credit card numbers are valid:

// ```markdown
// 9999777788880000
// 6666666666661666
// ```

// The following credit card numbers are invalid:

// ```markdown
// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
// ```
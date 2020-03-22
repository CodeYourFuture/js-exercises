

function validateNumber(arr) {
let validation = /(?=.{16})(?=.*[0-9]{2})(?=.([02468]$))/ 
return arr.map(card => validation.test(card))
// && arr.indexOf(card).reduce((a, b) =>(a+b), 0) > 16)


// names.slice(0,index)
// let validation = card
console.log(arr[3])
// 

// return validateSum
}

// function validateTest(arr) {
//     let validateCard = arr.map(card => arr.test(card))
//     return validateCard
// }


console.log(validateNumber(["9999777788880000", "6666666666661666", "a92332119c011112", "4444444444444444" ]))

// console.log(validateNumber("a92332119c011112"))




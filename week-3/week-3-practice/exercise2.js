//  Using the .map() method, create a new array with `numbers` divided by 100

// rounded the number to the nearest lower number

// An array with numbers  has been provided.

var numbers = [105.4, 176, 237.5, 240.46, 310, 420.9, 500.5];
var numberDivided = numbers.map(item => Math.round(item / 100));

console.log(numberDivided);
// /* EXPECTED RESULT * /

// [ 1, 1, 2, 2, 3, 4, 5  ]

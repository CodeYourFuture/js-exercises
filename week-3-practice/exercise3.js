/* 
Using ---.forEach--- write a function that multiply a number by it self.
*/

var figure = [7, 14, 23];
var amount = [];

figure.forEach(function(figure) {
  amount.push(figure * figure);
});

console.log(amount);
/*
  EXPECTED RESULT

  [ 49, 196, 529 ]
  
*/

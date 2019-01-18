/*Create a program to convert any amount of money from pound currency to euro currency.Use the.map() method.
You should take into consideration that 1£ equals 1.13 euro.Create a new array with“ valueInEuro” multiplied by 1.13*/

var valueInPound = [567, 985, 438, 954, 487];
var valueInEuro = valueInPound.map(function(pound) {
  return pound * 1.13;
}); // complete this line
console.log(valueInEuro);
/* excepted result
[ 640,71 , 1.113,05 , 494,94 ,1.078,02 , 550,31]*/

/* convert the array money to british pounds from us dollars
 */

var convertToPound = [];
var Money = ["$50", "$2000", "$300", "$500"];
/* write your answer here */
convertToPound = Money.map(money => {
  return "£" + (0.78 * parseFloat(money.slice(1))).toFixed(2);
});
console.log(convertToPound);

/* expected result
[ '£38.80', '£1551.83', '£232.78', '£387.96' ]*/

/* Given is an array find the element with characters more than 6 */

var food = ["Pizza", "Burger", "Fries", "Kebab", "Chicken Wings"];

var findLongestFoodName = food.filter(function(food) {
  if (food.length > 6) {
    return food;
  }
});

console.log(findLongestFoodName);

/* Expected Output

ChickenWings
*/

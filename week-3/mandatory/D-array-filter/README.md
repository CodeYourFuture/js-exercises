Imagine you have an array of students' test scores:

```js
var testScores = [90, 50, 100, 66, 25, 80, 81];
```

You want to show only the test scores that are higher than 80. How do you do that for every value in the array?

We can write a function that checks if one score is greater than 80:

```js
function isHighScore(score) {
  return score > 80;
}
```

To find out which scores were greater than 80, you'd have to run this function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!

## `.filter()`

_Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition_.

```js
var highTestScores = testScores.filter(isHighScore);

console.log(highTestScores); // logs [90, 100, 81]
```

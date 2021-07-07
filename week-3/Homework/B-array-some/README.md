Imagine you have an array of numbers:

```js
var numbers = [1, 3, -1, 5, 9];
```

You know that the array is supposed to contain positive numbers, but you want to check if it also contains any negative numbers.

We can write a function that checks this:

```js
function isNegative(number) {
  return number < 0;
}
```

To check your array of numbers, you'd have to run this function against every number in the array. Thankfully there is an array method that does just this!

## `.some()`

_Searches through an array and returns true if at least one array item satisifies the predicate function you provided._

```js
var containsNegative = ages.some(isNegative);

console.log(containsNegative); // logs true
```

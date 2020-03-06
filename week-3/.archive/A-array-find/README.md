Imagine you have an array of names:

```js
var names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
```

How would you find the first name that's longer than 6 characters?

You can write a predicate function that checks if a string is longer than 6 characters:

```js
function isLongName(name) {
  return name.length > 6;
}
```

To find the first item that satisfies the predicate you would have to go through each array item, and pass it into `isLongName`. Once it returns true, we can stop going through the array and grab the item that passed the predicate's test. Sounds complicated! Thankfully there is an array method that does just this!

## `.find()`

_Searches through the array and returns the value of the first item that satisfies a predicate function._

```js
var longName = names.find(isLongName);

console.log(longName); // logs Mozafar
```

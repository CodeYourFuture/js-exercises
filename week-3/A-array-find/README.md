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

To find the first item that satisfies the predicate you would have to:

- go through array, getting each array item one by one
- at every iteration, pass the array item into `isLongName`
- once `isLongName` returns true stop going through the array
- and finally grab the item that passed the predicate's test

That sounds like a lot of work! Thankfully there is a much easier way to achieve this using an array method!

## `.find()`

_Searches through the array and returns the value of the first item that satisfies a predicate function._

```js
var longName = names.find(isLongName);

console.log(longName); // logs Mozafar
```

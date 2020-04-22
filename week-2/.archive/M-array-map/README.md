Imagine you have an array of names...

```js
var mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
```

You notice that he names are not formatted consistently. To fix the array you decide you need to trim whitespace and convert to lowercase. How do you do that for every value in the array?

We can write a function that changes one name:

```js
function tidy(name) {
  return name.trim().toLowerCase();
}
```

All you need to run every name in the array through this function and update the array values. Thankfully there is an array method that does just this!

## `.map()`

_Runs every item in the array through a function and returns a new array with the values returned by the function_.

```js
var tidyMentors = mentors.map(tidy);

console.log(tidyMentors); // logs ["daniel", "irina", "gordon", "ashleigh"]
```

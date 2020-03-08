Imagine you have an array of people's names:

```js
var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley"];
```

You want to check that every student in the array has a name longer than 3 characters. How do you do that for every value in the array?

We can write a function that returns true or false:

```js
function isAboveThreshold(name) {
  return name.length > 3;
}
```

To check that each name is longer than 3 characters, you'd have to run this function against every name in the array and return false if someone's name is 3 or fewer characters. Thankfully there is an array method that does just this!

## `.every()`

_Searches through an array and returns true if every item satisifies the predicate function you provided. Otherwise, it returns false_.

```js
var studentNameLength = students.every(isAboveThreshold);

console.log(studentNameLength); // logs true
```

**Predicate** is a fancy word for a function that returns a boolean value.

These functions are very useful because they let you test if a value satisifies certain requirements.

```js
function isNumber(value) {
  return typeof value === "number";
}

isNumber(10); // returns true
isNumber("hello"); // returns false
```

JavaScript programmers often give predicate functions a name that starts with a verb e.g. `isBig`, `isNegative`, `isActive`, `shouldUpdate`,

Calling a predicate function is like asking a question: "is this value a number". The return value is the answer to your question.

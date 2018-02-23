Like humans, computer programs make decisions based on information given to them. **Conditionals** are a way of representing these decisions in code.

For example:

* In a game, if the player has 0 lives, then the game is over
* In a weather app, if rain is forecast, a picture of rain clouds is shown

The most common type of conditional is the **if statement**.

An if statment runs some code if a condition is met. If the condition is not met, then the code will skipped.

```js
var isHappy = true;

if (isHappy) {
  console.log("I am happy");
}
```

The code in paratheses - e.g. `(isHappy)` - is the condition. The condition can be _any_ expression. The following are all valid conditions:

```js
// boolean value
if (true) {
  // do something
}

// variable assigned to boolean value
if (isHappy) {
  // do something
}

// equality operator evaluates to boolean value
if (1 + 1 === 2) {
  // do something
}

// comparison operator evaluates to boolean value
if (10 > 5) {
  // do something
}

// function call returns boolean value
if (greaterThan10(5)) {
  // do something
}
```

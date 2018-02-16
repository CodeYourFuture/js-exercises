In programming there are different _types of_ data. You've used one data type already: **String**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```
var message = 'This is a string';
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can add two strings together using the plus operator (`+`):

```js
var greetingStart = "Hello, my name is ";
var name = "Daniel";

var greeting = greetingStart + name;

console.log(greeting); // Logs "Hello, my name is Daniel"
```

## Exercise

* Write a program that logs a message with a greeting and your name

## Expected result

```
Hello, my name is Daniel
```

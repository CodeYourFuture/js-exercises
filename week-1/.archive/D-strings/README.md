In programming there are different _types of_ data. You've used one data type already: **string**.

Computers recognise strings as a sequence of characters but to humans, strings are simply lines of text.

```js
var message = "This is a string";
```

Notice that strings are always wrapped **inside of quote marks**. We do this so that the computer knows when the string starts and ends.

You can check that the data is a string by using the `typeof` operator:

```js
var message = "This is a string";
var messageType = typeof message;

console.log(messageType); // logs 'string'
```

## Exercise

* Write a program that logs a message and its type

## Expected result

```
This is a string
string
```

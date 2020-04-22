You can find out how many characters there are in a string by using the `length` property of a string:

```js
var name = "Daniel";
var nameLength = name.length;

console.log(nameLength); // Logs 6
```

You can also get a modified version of a string by calling _string methods_. Let's try one:

```js
var name = "Daniel";
var nameLowerCase = name.toLowerCase();

console.log(nameLowerCase); // "daniel"
```

You can find out more about string properties and methods by searching for "JavaScript string methods".

## Exercise 1

* Log a message that includes the length of your name

## Expected result

```
My name is Daniel and my name is 6 characters long
```

## Exercise 2

* Log the same message using the variable, `name` provided
* Use the `.trim` method to remove the extra whitespace

## Expected result

```
My name is Daniel and my name is 6 characters long
```

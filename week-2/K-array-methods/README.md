lsDo you remember how strings have special functions called methods? Don't worry if not! Here's an example to jog your memory:

```sh
$ node
> var name = "Daniel"
undefined
> name.toLowerCase()
daniel
```

Arrays also have several methods that you can use.

### `.sort()`

_An array method that sorts the values in an array into ascending order._

```js
var unorderedNumbers = [19, 12, 99, 41, 82];
var orderedNumbers = unorderedNumbers.sort();

console.log(orderedNumbers); // logs [12, 19, 41, 82, 99]
```

> When you call an array method it uses the array on the left side of the dot as an input, and returns a new, transformed, array.

### `.concat()`

_Adds (or concatenates) another value or array to the array._

```sh
$ node
> var arr = [1, 2, 3]
undefined
> arr.concat(4)
[1, 2, 3, 4]
> arr
[1, 2, 3]
```

Did you notice how calling the concat method did not change `arr`? This is because `concat`, like most array methods, returns a _new_ array, it does not alter the one you called the method on.

If you wan to use the array returned by calling `.concat()` you should store it in a new variable.

```js
var arr = [1, 2, 3];
var newArr = arr.concat(4);

console.log(newArr); // logs [1, 2, 3, 4]
```

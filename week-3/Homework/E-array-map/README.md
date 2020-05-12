We learnt about the `.map()` method in the previous week. This week we'll study how it works in more depth.

You might remember this example:

```js
function double(number) {
  return number * 2;
}

var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(double);
```

The `map()` method runs the function we provided (`double`) on each item in the array and uses the return values to create a new array. In the example `numbersDoubled` is a new array containing `[2, 4, 6]`.

### Callback functions

A function that we provide to a method is commonly called a _callback_ function. The term highlights that although we _provide_ the `double` function, the `.map()` method _calls_ it. (Notice how we never write `double()` to call the function).

We'll see callback functions used a lot more in the coming weeks. 

Often, when a function is only needed for a map operation, developers will declare the callback function inside of the method call. Let's try copying and pasting the function declaration inside of the `.map()` method call.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(function double(number) {
  return number * 2;
});
```

We can make this shorter by removing the function name. We can do this because we are not using the function anywhere else in the code, so we do not need the function name to reference it.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(function (number) {
  return number * 2;
});
```

We can make this code even shorter still. In the latest versions of JavaScript a way of declaring functions was introduced called _arrow functions_. 

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(number => {
  return number * 2
});
```

The arrow function syntax lets you declare a function without the `function` keyword. (There are some other subtle differences between arrow functions and regular functions that you will learn about at a much later stage).

There is one last thing you can do to make your code shorter. If you remove the braces (`{}`) from an arrow function, the body of the function will be returned without needing to write the `return` keyword.

```js
var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(number => number * 2);
```

In the example above, the expression `number * 2` is automatically returned because it comes directly after the `=>` arrow (instead of coming after curly braces). This is called an `implicit return`.
The `.forEach()` method is similar to `.map()` except it does not return a new array. Therefore `.forEach()` is only useful if you want to perform _side effects_.

### Side effects

Generally, functions should take an input and return an output (based on that input), and not do anything else.

When functions meet this criteria they can be called _pure functions_.

A pure function does not:

* access any data unless it was passed in as a parameter
* change data declared outside the function
* interacts with anything outside of the function (e.g. logs a message to the console, shows a message on a website, saves data to disk)

These are all example of _side effects_. Of course, from time to time, we will need to perform side effects, but we should try to avoid side effects inside of functions and only have them when absolutely necessary.

### Example

Say we want to log to the console a list of names.

```js
var names = ["Daniel", "mozafar", "irina"];
```

We can use `.forEach()` to go through the array, item by item, and call a function we provide.

```js
names.forEach(function(name, index) {
  console.log(index + ": " + name);
});
```

This logs each name to the console as hoped, but we notice that the names are not formatted correctly. You might be tempted to format the name inside of the `forEach` function.

However, it is good practise to write small functions with a single responsibility. So instead, we can write a `formatName` function (which we can re-use in other places) and pass it to `.map()` before calling `.forEach()`.

```js
function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

names.map(formatName).forEach(function(name, index) {
  console.log(index + ": " + name);
});
```

### Chaining

Notice how we were able to write one method after another e.g. `names.map(formatName).forEach(log)`? This is called _method chaining_.

You can call `.forEach()` after `.map()` because `.map()` returns a new array.

Consider this code:

```js
var namesFormatted = names.map(format);
namesFormatted.forEach(log);
```

It can be written more simply (without assigning the array returned from `.map()` to a variable):

```js
names.map(format).forEach(log);
```

Be careful though! You can not call `.map()` after `.forEach`.

```js
names.forEach(log).map(formatName); // ERROR
```

This code does not work because `forEach()` does not return a new array (it returns `undefined`). The code is therefore attempting to call `.map()` on `undefined`, and `undefined` does not have a `.map()` method.

There are three logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT).

They let you write expressions that evaluate to a boolean value.

Suppose you want to test if a number if bigger than 3 and smaller than 10. We can write this using logical operators.

```js
var num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}
```

We can test expressions with logical operators in a node console too:

```sh
$ node
> var num = 10;
undefined
> num > 5 && num < 15
true
> num < 10 || num === 10
true
> false || true
true
> !true
false
> var greaterThan5 = num > 5
undefined
> !greaterThan5
false
> !(num === 10)
false
```

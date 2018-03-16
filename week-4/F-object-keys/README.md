### Goals

`Object.keys()` allows your to iterate over an object's keys, in the same way that a `for..in` loop would, and return an array of strings of your object's keys.

Object is a type that has built-in methods attached to it - such as `.keys()` or `.values()`. You're all very familiar with `console.log()` - `Object` is helpfully provided to us.

Here is an example output for using `.keys()`:

```js
var footballClubs = {
  chelsea_fc: 'England',
  fc_barcelona: 'Spain',
  ac_milan: 'Italy'
};

console.log(Object.keys(footballClubs));
// returns [ 'chelsea_fc', 'fc_barcelona', 'ac_milan' ]
```

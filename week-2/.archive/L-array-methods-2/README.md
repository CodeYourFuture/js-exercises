Let's explore some more array methods.

### `.slice()`

_Returns a slice of the array._

You can tell `.slice()` where you want the slice to begin and end by passing it two parameters.

```sh
$ node
> var arr = [0, 1, 2, 3, 4]
undefined
> arr.slice(0, 2)
[0, 1]
> ["a", "b", "c", "d"].slice(1, 2)
['b']
```

### `.includes()`

_Returns true if a value is in the array._

```js
var mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name) {
  return mentors.includes(name);
}

consooe.log("Is Rukmuni a mentor?");
console.log(isAMentor("Rukmini")); // logs false
```

### `.join()`

_Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma `,`. If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:_

```sh
$ node
> ["H", "e", "l", "l", "o"].join();
'H,e,l,l,o'
> ["H", "e", "l", "l", "o"].join("--");
'H--e--l--l--o'
```

There is a string method `.split()`. In an interactive console try using the string `.split()` method and the array `.join()`. How could they work together?
